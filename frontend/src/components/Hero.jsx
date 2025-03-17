import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export default function Hero() {
  const navigate=useNavigate();
  const handleClick = () => {
    
    navigate("/transactions")
  }
    return (
      <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold mb-6">
            Take Control of Your <span className="text-yellow-400">Finances</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Manage your expenses, track your savings, and plan for the future with ease.
          </p>
          <Button variant="outline"  onClick={()=>{handleClick()}}>
            Get Started
        </Button>
        </div>
      </section>
    );
  }
  
