import React, { useEffect } from "react";
import { Box, List, ListItem, Button, Text, Icon, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import ClipboardJS from 'clipboard';

const ExerciseList = () => {
    const exercises = [
        {
          explanation:
            "List the first and last names of employees with salaries greater than $40,000.",
          sql: "SELECT Fname, Lname FROM Employee WHERE Salary > 40000",
        },
        {
          explanation:
            "Identify the department managed by employee with SSN '888665555'.",
          sql: "SELECT Dname FROM Department WHERE Mgr_ssn = '888665555'",
        },
        {
          explanation: "Count how many departments have locations in Houston.",
          sql: "SELECT COUNT(*) FROM Dept_Locations WHERE Dlocation = 'Houston'",
        },
        {
          explanation:
            "Identify the projects undertaken by the department with Dnumber 5.",
          sql: "SELECT Pname FROM Project WHERE Dnum = 5",
        },
        {
          explanation:
            "Find the SSN of employees who have worked more than 30 hours on project number 1.",
          sql: "SELECT Essn FROM Works_On WHERE Pno = 1 AND Hours > 30",
        },
        {
          explanation: "List employees and their spouses.",
          sql: "SELECT Essn, Dependent_name FROM Dependent WHERE Relationship = 'Spouse'",
        },
        {
          explanation: "Identify unique department locations.",
          sql: "SELECT DISTINCT Dlocation FROM Dept_Locations",
        },
        {
          explanation:
            "List employee names alongside the names of the departments they work in.",
          sql: "SELECT Fname, Lname, Dname FROM Employee JOIN Department ON Employee.Dno = Department.Dnumber",
        },
        {
          explanation:
            "Display the project names and hours worked on them by employee with SSN '123456789'.",
          sql: "SELECT Pname, Hours FROM Works_On JOIN Project ON Works_On.Pno = Project.Pnumber WHERE Essn = '123456789'",
        },
        {
          explanation: "Calculate the average salary of all employees.",
          sql: "SELECT AVG(Salary) FROM Employee",
        },
      ];

    const toast = useToast();

    useEffect(() => {
        const clipboard = new ClipboardJS('.copy-button', {
            text: function(trigger) {
                return trigger.getAttribute('data-clipboard-text');
            }
        });

        clipboard.on('success', function(e) {
            toast({
                title: "Copied",
                description: "SQL statement copied to clipboard",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            toast({
                title: "Error",
                description: "Failed to copy to clipboard",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        });

        return () => {
            clipboard.destroy();
        };
    }, [toast]);

    return (
        <Box padding="20px" backgroundColor="gray.200">
            <List spacing={3}>
                {exercises.map((item, index) => (
                    <ListItem
                        key={index}
                        borderWidth="1px"
                        borderRadius="md"
                        padding="20px"
                        backgroundColor="white"
                        position="relative"
                    >
                        <Text
                            color="green.500"
                            marginBottom="5px"
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            {`Example ${index + 1}: ${item.explanation}`}
                        </Text>
                        <Text fontFamily="monospace" fontSize="md" marginBottom="10px">
                            {item.sql}
                        </Text>
                        <Button
                            size="sm"
                            data-clipboard-text={item.sql}
                            className="copy-button"
                            leftIcon={<Icon as={CopyIcon} />}
                            position="absolute"
                            top="5px"
                            right="5px"
                        >
                            Copy
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ExerciseList;