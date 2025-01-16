"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  useReactFlow,
  ReactFlowProvider,
  Handle,
  Position,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { FaUser, FaBuilding, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { mockData } from "./mockGraphdata";
import CustomNode from "@/components/CustomNode";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const CustomTooltip = ({ content, children, onClick, className }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onClick} className={`${className}`}>
          {children}
        </TooltipTrigger>
        <TooltipContent className="bg-emerald-400 text-slate-950" side="right">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "root",
    type: "custom",
    position: { x: 0, y: 0 },
    data: { label: "Root", icon: FaUser, isExpanded: false },
  },
];

const fitViewOptions = {
  duration: 1000,
  padding: 0.2,
  includeHiddenNodes: false,
};

const initialEdges = [];

const findChildTree = (treeData, selectedRootId) => {
  const rootId = selectedRootId;
  // console.log("selected root id", rootId);
  const getChild = (node) => {
    if (node.id === rootId) {
      return node;
    } else {
      if (node.children) {
        let childFound;
        node.children.forEach((ch) => {
          if (!childFound) childFound = getChild(ch);
        });
        if (childFound) return childFound;
      }
    }
  };
  return getChild(treeData);
};

const findParentTree = (treeData, selectedRootId) => {
  const rootId = selectedRootId;
  // console.log("selected root id", rootId);
  const getParent = (node) => {
    // if (node.id === rootId) {
    //   return node;
    // } else {
    //   if (node.children) {
    //     let childFound;
    //     node.children.forEach((ch) => {
    //       if (!childFound) childFound = getChild(ch);
    //     });
    //     if (childFound) return childFound;
    //   }
    // }
    if (node.children) {
      let childExist = node.children.find((ch) => ch.id === selectedRootId);
      if (childExist) {
        return node;
      } else {
        let parentFound;
        node.children.forEach((ch) => {
          let parent = getParent(ch);
          if (parent) {
            parentFound = parent;
            return;
          }
        });
        if (parentFound) {
          return parentFound;
        }
      }
    }
  };
  let output = getParent(treeData);
  return output;
};

const OSINTGraphInner = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [treeData, setTreeData] = useState(mockData);
  const [selectedRoot, setSelectedRoot] = useState(null);
  const nodesRef = useRef(nodes);
  const isProcessingRef = useRef(false);
  const [graphStatus, setGraphStatus] = useState("processing");
  // const params = useSearchParams();
  const graphId = "test";
  // const graphId = params.get("graphId");
  // const search = params.get("search");
  // const identifier = params.get("identifier");

  const { fitView } = useReactFlow();

  const collapseToRoot = () => {
    const actionTypes = "collapse" || "expand" || "root";
    const action = "root";
    setSelectedRoot(null);
    setTimeout(() => {
      fitView(fitViewOptions);
    }, 1000);
  };

  const collapseParent = () => {
    // console.log(nodes, selectedRoot);
    if (selectedRoot && treeData) {
      let filteredTree;
      // setSelectedRoot(selectedRoot.parentNode);
      if (selectedRoot) {
        filteredTree = findParentTree(treeData, selectedRoot);
      } else {
        filteredTree = treeData;
      }
      setSelectedRoot(filteredTree.id);
      // const [newNodes, newEdges] = layoutNodes([filteredTree]);
      // setNodes(newNodes);
      // setEdges(newEdges);
    }
  };

  // const toggleChildrenVisibility = useCallback(
  //   (nodeId, expandFlag) => {
  //     if (isProcessingRef.current) return;
  //     isProcessingRef.current = true;

  //     let testNodes = [];
  //     console.log("updating");

  //     setNodes((nds) => {
  //       //   console.log("first nodes", nds);
  //       const updatedNodes = nds.map((node) => {
  //         if (node.id === nodeId) {
  //           // Toggle the expanded state of the clicked node
  //           node.data = { ...node.data, isExpanded: true };
  //         }
  //         // console.log("parent", node.parentNode, nodeId);
  //         if (node.parentNode === nodeId) {
  //           // Toggle visibility of immediate children
  //           console.log(node.hidden);
  //           node.hidden = false;
  //         }
  //         return node;
  //       });

  //       // Recursively hide all descendants if the parent is being collapsed
  //       const hideDescendants = (parentId, shouldHide) => {
  //         updatedNodes.forEach((node) => {
  //           if (node.parentNode === parentId) {
  //             node.hidden = shouldHide;
  //             if (node.data.isExpanded && shouldHide) {
  //               node.data.isExpanded = false;
  //               hideDescendants(node.id, true);
  //             }
  //           }
  //         });
  //       };
  //       const clickedNode = updatedNodes.find((n) => n.id === nodeId);
  //       if (clickedNode && !clickedNode.data.isExpanded) {
  //         hideDescendants(nodeId, true);
  //       }
  //       // testNodes = updatedNodes;
  //       return updatedNodes;
  //     });
  //     // console.log("updated set",nodes);

  //     setEdges((eds) =>
  //       eds.map((edge) => {
  //         const sourceNode = testNodes.find((n) => n.id === edge.source);
  //         const targetNode = testNodes.find((n) => n.id === edge.target);

  //         if (sourceNode && targetNode) {
  //           if (edge.source === nodeId) {
  //             // This is an edge from the clicked node to its child
  //             edge.hidden = !sourceNode.data.isExpanded;
  //           } else if (edge.target === nodeId) {
  //             // This is an edge from a parent to the clicked node
  //             // We don't want to hide this edge
  //             edge.hidden = false;
  //           } else if (targetNode.parentNode === nodeId) {
  //             // This is an edge between children of the clicked node
  //             edge.hidden = !sourceNode.data.isExpanded;
  //           }
  //         }

  //         return edge;
  //       })
  //     );
  //     setTimeout(() => {
  //       isProcessingRef.current = false;
  //     }, 0);
  //   },
  //   [setNodes, setEdges]
  // );

  const fillAllNodes = () => {
    fitView({
      duration: 2000, // Animation duration in milliseconds
      padding: 0.2,
      includeHiddenNodes: false,
    });
  };

  const populateCollapsedNodeIds = (currentNodes, nodeIds, clickedNodeId) => {
    currentNodes.forEach((n) => {
      if (n.parentNode === clickedNodeId && !nodeIds.includes(n.id)) {
        nodeIds.push(n.id);
        // Recursively add children of the current node
        populateCollapsedNodeIds(currentNodes, nodeIds, n.id);
      }
    });
  };
  const toggleChildrenVisibility = useCallback(
    (nodeId) => {
      if (isProcessingRef.current) return;
      isProcessingRef.current = true;

      setNodes((currentNodes) => {
        // console.log(currentNodes);
        const collapsedNodeIds = [];
        populateCollapsedNodeIds(currentNodes, collapsedNodeIds, nodeId);
        const updatedNodes = currentNodes.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              data: { ...node.data, isExpanded: !node.data.isExpanded },
            };
          }

          if (collapsedNodeIds.includes(node.id)) {
            return { ...node, hidden: !node.hidden };
          }
          return node;
        });

        const hideDescendants = (parentId, shouldHide) => {
          return updatedNodes.map((node) => {
            if (node.parentNode === parentId) {
              const newNode = {
                ...node,
                hidden: shouldHide,
                data: { ...node.data, isExpanded: shouldHide ? false : node.data.isExpanded },
              };
              if (newNode.data.isExpanded && shouldHide) {
                return hideDescendants(node.id, true);
              }
              return newNode;
            }
            return node;
          });
        };

        const clickedNode = updatedNodes.find((n) => n.id === nodeId);
        if (clickedNode && !clickedNode.data.isExpanded) {
          return hideDescendants(nodeId, true);
        }

        return updatedNodes;
      });

      setEdges((currentEdges) => {
        return currentEdges.map((edge) => {
          const sourceNode = nodesRef.current.find((n) => n.id === edge.source);
          const targetNode = nodesRef.current.find((n) => n.id === edge.target);
          if (sourceNode && targetNode) {
            if (edge.source === nodeId) {
              return { ...edge, hidden: sourceNode.data.isExpanded };
            } else if (edge.target === nodeId) {
              return { ...edge, hidden: false };
            } else if (targetNode.parentNode === nodeId) {
              return { ...edge, hidden: !sourceNode.data.isExpanded };
            }
          }

          return edge;
        });
      });
      fillAllNodes();
      // Reset the processing flag after a short delay
      setTimeout(() => {
        isProcessingRef.current = false;
      }, 0);
    },
    [setNodes, setEdges]
  );

  const onNodeClick = (event, node) => {
    console.log("Clicked node", node);
    if (node && node.id) {
      setSelectedRoot(node.id);
      // toggleChildrenVisibility(node.id);
    }
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: "default" }, eds)),
    [setEdges]
  );

  const layoutNodes = (nodes, parentX = 0, parentY = 0, level = 0, parentId = null) => {
    const nodeWidth = 110; // Updated nodeWidth value
    const nodeHeight = 20;
    const horizontalSpacing = 150;
    const verticalSpacing = 20;
    let newNodes = [];
    let newEdges = [];

    nodes.forEach((node, index, array) => {
      const x = level * horizontalSpacing + nodeWidth;
      const middleIndex = Math.floor(array.length / 2);
      const yOffset = (index - middleIndex) * (nodeHeight + verticalSpacing) * (5 - level * 2);
      const y = parentY + yOffset;

      const newNode = {
        ...node,
        type: "custom",
        position: { x, y },
        data: {
          ...node.data,
          isExpanded: false,
          children: node.children,
          onClick: () => onNodeClick(null, { id: node.id, data: node.data, parentNode: parentId }),
          id: node.id,
          level: level,
        },
        parentNode: parentId,
        hidden: level > 2, //specify level here ex: level > 2
      };

      newNodes.push(newNode);

      if (parentId) {
        newEdges.push({
          id: `${parentId}-${node.id}`,
          source: parentId,
          target: node.id,
          type: "simplebezier",
          animated: true,
          markerStart: "test",
          markerEnd: "test",
          style: {
            stroke: level === 1 ? "#227f8a" : level === 2 ? "#5b27a3" : "#84c9d1",
            strokeWidth: 1,
          },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#888" },
          hidden: level > 2, //specify level here ex: level > 2
        });
      }

      if (node.children && node.children.length > 0) {
        const [childNodes, childEdges] = layoutNodes(node.children, x, y, level + 1, node.id);
        newNodes = [...newNodes, ...childNodes];
        newEdges = [...newEdges, ...childEdges];
      }
    });

    return [newNodes, newEdges];
  };

  const fetchData = useCallback(async () => {
    if (graphId) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          graphId: graphId,
          // action: action,
          // entityId: entityId,
        }),
      };
      // const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "fetchGraph", options);

      // const newData = await response.json();
      // console.log("from fetch", newData);
    }

    let filteredTree;
    if (selectedRoot) {
      filteredTree = findChildTree(treeData, selectedRoot);
    } else {
      filteredTree = treeData;
    }
    console.log("filtered Tree", filteredTree);
    const [newNodes, newEdges] = layoutNodes([filteredTree]);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [setNodes, setEdges, selectedRoot]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [fetchData]);

  useEffect(() => {
    // console.log(selectedRoot);
    if (selectedRoot) {
      fetchData();
    }
    setTimeout(() => {
      fitView(fitViewOptions);
    }, 1000);
  }, [selectedRoot]);

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  useEffect(() => {
    if (nodes.length > 0) {
      // fitView(fitViewOptions);
    }
  }, [nodes, fitView]);

  return (
    <div className="w-full h-screen flex flex-col bg-background graph-bg">
      <div className="graph-header">
        <h1>OSINT Graph for Test</h1>
        <CustomTooltip
          className="bg-secondary collapse-all-btn"
          onClick={collapseToRoot}
          content="Go back to Root nodes"
        >
          Collapse all
        </CustomTooltip>
        <CustomTooltip
          className="bg-secondary collapse-parent-btn"
          onClick={collapseParent}
          content="Back to parent"
          position="bottom"
        >
          Back
        </CustomTooltip>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView={true}
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={{ type: "simplebezier" }}
      >
        <Controls />
        {/* <MiniMap /> */}
        {/* <Background variant="dots" gap={12} size={1} /> */}
      </ReactFlow>

      {graphStatus === "completed" ? (
        <Button className="bg-secondary graph-report-btn" onClick={() => router.push("/dashboard")}>
          Dashboard
        </Button>
      ) : (
        <Button className="bg-secondary graph-report-btn" style={{ cursor: "progress" }}>
          <Image src="/img/wheel-loader.gif" unoptimized width={30} height={30} alt="gears" />
          Generating Graph please wait...
        </Button>
      )}
    </div>
  );
};

const OSINTGraph = () => (
  <ReactFlowProvider>
    <OSINTGraphInner />
  </ReactFlowProvider>
);

export default OSINTGraph;
