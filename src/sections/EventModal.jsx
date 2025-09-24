import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventModal = ({ isOpen, onClose, event, day, date }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full mx-4 border border-cyan-500/40 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-cyan-200 mb-2">{day}</h3>
          <p className="text-lg text-cyan-200/80 mb-4">{date}</p>
          <h4 className="text-xl font-semibold text-cyan-100">{event.title}</h4>
          {event.time && <p className="text-sm text-cyan-100/80 mb-4">{event.time}</p>}
          {event.details && (
            <ul className="list-disc list-inside text-cyan-100/80 text-sm">
              {event.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
          <button
            className="mt-6 bg-cyan-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventModal;