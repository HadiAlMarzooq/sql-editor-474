const executeSQL = async (sql) => {
    const response = await fetch('https://sql-editor-api.vercel.app/api/execute-sql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql }),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    return data.rows;
};

export { executeSQL };