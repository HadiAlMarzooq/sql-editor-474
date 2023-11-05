import React, { useState } from "react";
import {
  Box,
  useToast,
  Collapse,
  Button,
  Heading,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { executeSQL } from "../services/api";
import SQLEditor from "../components/SQLEditor";
import SQLResult from "../components/SQLResult";
import ExerciseList from "../components/ExerciseList";
import DBDiagramViewer from "../components/DBDiagramViewer";
import useStore from "../stores/store";

const MainScreen = () => {
  const { results, error, setResults, setError } = useStore();
  const toast = useToast();
  const [showExercises, setShowExercises] = useState(false);
  const [showSchema, setShowSchema] = useState(false);

  const handleExecuteSQL = async (sql) => {
    try {
      const rows = await executeSQL(sql);

      setResults(rows);
      setError(null);

      toast({
        title: "Success",
        description: "SQL query executed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      setError(err.message);
      setResults(null);

      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box display="flex" flexDirection="column" style={{ margin: 15 }}>
      <Box display="flex" flexDirection={["column", "row"]} flexGrow={1}>
        <Card width="100%" overflow="hide">
          <Heading size="md" margin="2">
            📝 SQL Editor
          </Heading>
          <CardBody>
            <SQLEditor onExecute={handleExecuteSQL} />
          </CardBody>
        </Card>
        <Card width="100%">
          <Heading size="md" margin="2">
            🔍 SQL Results
          </Heading>
          <CardBody>
            <SQLResult results={results} error={error} />
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Button
          onClick={() => setShowExercises(!showExercises)}
          width="100%"
          marginTop="5"
          marginBottom="5"
        >
          {showExercises ? "👁️‍🗨️ Hide Exercises" : "🏋️ Show Exercises"}
        </Button>
        <Collapse in={showExercises}>
          <Card>
            <Heading size="md">🏋️ Exercise List</Heading>
            <CardBody>
              <ExerciseList />
            </CardBody>
          </Card>
        </Collapse>
      </Box>
      <Box>
        <Button
          onClick={() => setShowSchema(!showSchema)}
          width="100%"
          marginTop="5"
          marginBottom="5"
        >
          {showSchema ? "👁️‍🗨️ Hide Schema" : "🗺 Show Schema"}
        </Button>
        <Collapse in={showSchema}>
          <Card>
            <Heading size="md" margin="2">
              🗺 Schema
            </Heading>
            <CardBody>
              <DBDiagramViewer />
            </CardBody>
          </Card>
        </Collapse>
      </Box>
    </Box>
  );
};

export default MainScreen;
