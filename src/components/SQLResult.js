import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Center,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const SQLResult = ({ results, error }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <Box flex="1" padding="20px">
      {error && <Text color="red.500">{error}</Text>}
      {results ? (
        <Box overflowX="auto" maxWidth="100%">
          <Table variant="striped" size="sm">
            <Thead>
              <Tr>
                {Object.keys(results[0]).map((key) => (
                  <Th key={key}>{key}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {results.map((row, index) => (
                <Tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <Td key={i}>{value}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Center>
          <BeatLoader
            color={"green"}
            loading={true}
            css={override}
            size={15}
          />
          <Text marginLeft="10px">Waiting for your script...</Text>
        </Center>
      )}
    </Box>
  );
};

export default SQLResult;
