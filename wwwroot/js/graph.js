window.drawGraph = (nodes, edges) => {
    const cy = cytoscape({
        container: document.getElementById('graph'),
        elements: [
            ...nodes.map(node => ({
                data: { id: node.id }
            })),
            ...edges.map(edge => ({
                data: { source: edge.source, target: edge.target, weight: edge.weight }
            }))
        ],
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#69b3a2',
                    'label': 'data(id)',
                    'color': '#333',
                    'text-valign': 'center',
                    //'text-halign': 'right'
                }
            },
            {
                selector: 'edge',
                style: {
                    'label': 'data(weight)',
                    'line-color': '#999',
                    'width': 2,
                    'text-background-color': 'white', 
                    'text-background-opacity': 1,
                    'text-background-padding': 2
                }
            }
        ],
        layout: {
            name: 'cose',
            nodeRepulsion: 4000,
            idealEdgeLength: 10,
            gravity: 0.05,
            numIter: 1000,
            coolingFactor: 0.9,
            edgeElasticity: 0.1,
            nodeOverlap: 40,
            fit: true,
            padding: 10
        }
    });
};
