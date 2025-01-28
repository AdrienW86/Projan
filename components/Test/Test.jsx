"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Test Motion</h2>
    </motion.div>
  );
}
