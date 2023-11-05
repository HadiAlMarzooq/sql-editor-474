import React from 'react';

const DBDiagramViewer = () => {
    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '4px',
            overflow: 'hidden',
            margin: '16px 0'
        }}>
            <iframe 
                style={{
                    width: '100%',
                    height: '25rem'
                }}
                title="DB Diagram"
                src='https://dbdiagram.io/e/654101017d8bbd646533a158/6541010f7d8bbd646533a299' 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    );
};

export default DBDiagramViewer;