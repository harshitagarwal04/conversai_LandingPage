"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import agentsData from "@/data/usecases.json";

interface UseCase {
  title: string;
  description: string;
  impact: string;
  workflow: string;
}

interface AgentType {
  name: string;
  role: string;
  description: string;
  functionality: {
    primary_functions: string[];
  };
  use_cases: UseCase[];
}

interface AgentDetailsExplorerProps {
  agentName: string;
}

const AgentDetailsExplorer: React.FC<AgentDetailsExplorerProps> = ({ agentName }) => {
  const [agent, setAgent] = useState<AgentType | null>(null);

  useEffect(() => {
    const allAgents: AgentType[] = [];

    Object.values(agentsData).forEach((category: any) => {
      Object.values(category.agents).forEach((agent: unknown) => {
        allAgents.push(agent as AgentType);
      });
    });

    const normalizedSearch = agentName.toLowerCase().trim();
    const found = allAgents.find((a) =>
      a.name.toLowerCase().includes(normalizedSearch)
    );

    setAgent(found || null);
  }, [agentName]);

  if (!agent) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p>Loading agent details...</p>
      </div>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br text-xs from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden h-[600px] w-full shadow-2xl border-0">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
        {/* Left Column - Avatar + Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center space-y-6"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl"
          >
            <Avatar className="w-full h-full border-2 border-white/20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback className="bg-white text-gray-900 text-2xl font-bold">
                {agent.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name and Role */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">{agent.name}</h1>
            <p className="text-sm text-white/70">{agent.role}</p>

            <button
              className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full shadow transition"
              onClick={() => alert(`Starting a demo call with ${agent.name}...`)}
            >
              Demo Call
            </button>
          </div>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-full">
            <h2 className="text-sm font-semibold mb-2 text-white">Description</h2>
            <p className="text-xs text-white/85">{agent.description}</p>
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 overflow-y-auto max-h-full pr-2"
        >
          {agent.functionality?.primary_functions?.length > 0 && (
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              <h2 className="text-sm font-semibold mb-3 text-white">Primary Functions</h2>
              <ul className="space-y-2">
                {agent.functionality.primary_functions.map((func, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <span className="text-xs text-white/85">{func}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {agent.use_cases?.length > 0 && (
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              <h2 className="text-sm font-semibold mb-3 text-white">Use Cases</h2>
              {agent.use_cases.map((uc, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xs font-semibold text-white mb-1">{uc.title}</h3>
                  <p className="text-xs text-white/85 mb-1">{uc.description}</p>
                  <p className="text-xs text-white/70">
                    <strong>Impact:</strong> {uc.impact}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Card>
  );
};

export default AgentDetailsExplorer;
