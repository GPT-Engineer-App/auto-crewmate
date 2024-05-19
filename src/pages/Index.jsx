import React, { useState, useEffect } from "react";
import { Container, Text, VStack, Box, Progress, Switch, Button, Textarea, HStack, IconButton, useToast, Tooltip, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { FaPowerOff, FaPlay, FaPause, FaStop, FaSave, FaCode, FaFolderOpen, FaKey, FaCog, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300);
  }, [onComplete]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black">
      <VStack spacing={4}>
        <Text fontSize="4xl" color="cyan" fontFamily="Consolas">
          AutoCrew
        </Text>
        <Box width="100%" bg="gray.700" borderRadius="md" overflow="hidden">
          <Progress value={progress} size="lg" colorScheme="cyan" />
        </Box>
        <Text fontSize="sm" color="cyan" fontFamily="Consolas">
          Written & Created by Psychophoria
        </Text>
      </VStack>
    </Container>
  );
};

const MainMenu = () => {
  const [isContinuous, setIsContinuous] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isKilled, setIsKilled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState("0h 0m");
  const [initialRequest, setInitialRequest] = useState("");
  const [isRequestMode, setIsRequestMode] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [agents, setAgents] = useState([
    { name: "Master Agent", status: "Idle", isActive: true },
    { name: "Project Manager", status: "Idle", isActive: true },
    { name: "Coding Agent", status: "Idle", isActive: true },
    { name: "Internet Research Agent", status: "Idle", isActive: true },
    { name: "Social Media Agent", status: "Idle", isActive: true },
    { name: "Photo & Art Agent", status: "Idle", isActive: true },
    { name: "Business Executive Agent", status: "Idle", isActive: true },
    { name: "Financial Executive Agent", status: "Idle", isActive: true },
    { name: "Videography Agent", status: "Idle", isActive: true },
    { name: "Mixture of Experts", status: "Idle", isActive: true },
    { name: "Testing Agent", status: "Idle", isActive: true },
    { name: "Advertising Agent", status: "Idle", isActive: true },
  ]);
  const toast = useToast();

  const handleSendRequest = () => {
    if (isRequestMode) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 10000);
    }
    // Handle sending request or update to CrewAI
  };

  const handleToggleAgent = (index) => {
    const newAgents = [...agents];
    newAgents[index].isActive = !newAgents[index].isActive;
    setAgents(newAgents);
  };

  const handleToggleContinuous = () => setIsContinuous(!isContinuous);
  const handleStartStop = () => setIsRunning(!isRunning);
  const handlePauseResume = () => setIsPaused(!isPaused);
  const handleKill = () => setIsKilled(true);
  const handleSaveExport = () => toast({ title: "Save/Export initiated.", status: "info", duration: 3000, isClosable: true });

  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" bg="black" color="cyan" fontFamily="Consolas">
      <Text fontSize="4xl" textAlign="center" mt={4}>
        AutoCrew
      </Text>
      <HStack spacing={4} mt={4}>
        <VStack spacing={4} align="start" width="20%">
          {agents.map((agent, index) => (
            <HStack key={index} spacing={2}>
              <Switch isChecked={agent.isActive} onChange={() => handleToggleAgent(index)} />
              <Text>{agent.name}</Text>
              <Text>({agent.status})</Text>
            </HStack>
          ))}
        </VStack>
        <VStack spacing={4} width="60%">
          <Box width="100%" bg="gray.700" borderRadius="md" p={4}>
            <HStack justifyContent="space-between">
              <Text>{isRequestMode ? "INITIAL REQUEST" : "UPDATE INJECTOR"}</Text>
              <Switch isChecked={!isRequestMode} onChange={() => setIsRequestMode(!isRequestMode)} />
            </HStack>
            <Textarea value={initialRequest} onChange={(e) => setInitialRequest(e.target.value)} placeholder="Enter your request or update here..." />
            <Button mt={2} onClick={handleSendRequest}>
              Send
            </Button>
            {showWarning && (
              <Text color="yellow.400" mt={2}>
                ⚠️ Do not enter any further text into this window. Use the update injector instead.
              </Text>
            )}
          </Box>
          <HStack spacing={4} width="100%">
            <Box width="50%" bg="gray.700" borderRadius="md" p={4}>
              <Text>Full Output</Text>
              {/* Full output content here */}
            </Box>
            <Box width="50%" bg="gray.700" borderRadius="md" p={4}>
              <Text>Agent Responses</Text>
              {/* Agent responses content here */}
            </Box>
          </HStack>
        </VStack>
        <VStack spacing={4} align="start" width="20%">
          <Button leftIcon={<FaPowerOff />} onClick={handleToggleContinuous}>
            Continuous: {isContinuous ? "On" : "Off"}
          </Button>
          <Button leftIcon={isRunning ? <FaPause /> : <FaPlay />} onClick={handleStartStop}>
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button leftIcon={<FaStop />} onClick={handleKill}>
            Kill
          </Button>
          <Button leftIcon={<FaSave />} onClick={handleSaveExport}>
            Save/Export
          </Button>
          <Button leftIcon={<FaCode />}>Local Code Execution</Button>
          <Button leftIcon={<FaFolderOpen />}>Open Workspace</Button>
          <Button leftIcon={<FaFolderOpen />}>Change Workspace Directory</Button>
          <Button leftIcon={<FaKey />}>API Keys</Button>
          <Select placeholder="Select LLM System">
            <option value="ollama">Ollama</option>
            <option value="google">Google/Gemini</option>
            <option value="groq">Groq</option>
          </Select>
          <Select placeholder="Select Ollama Model">{/* Populate with available Ollama models */}</Select>
          {/* Additional buttons, switches, sliders */}
        </VStack>
      </HStack>
      <Box width="80%" bg="gray.700" borderRadius="md" p={4} mt={4} mx="auto">
        <Progress value={progress} size="lg" colorScheme="cyan" />
        <Text mt={2}>Estimated Completion: {progress}%</Text>
        <Text>Estimated Time Remaining: {estimatedTime}</Text>
      </Box>
    </Container>
  );
};

const Index = () => {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return isSplashComplete ? <MainMenu /> : <SplashScreen onComplete={() => setIsSplashComplete(true)} />;
};

export default Index;
