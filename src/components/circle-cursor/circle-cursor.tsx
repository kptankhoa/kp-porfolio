"use client"
import { useEffect } from "react";
import "./circle.css";

const CircleCursor = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/static/circle-cursor.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="circle" />
  )
}

export default CircleCursor;
