import { motion } from 'framer-motion';
import { calculateMovingDuration, calculateMoveDown } from '@/utils';

const ProjectImageTwo = ({ project }) => {
    const moveDown = calculateMoveDown(project);
    const movingDuration = calculateMovingDuration(project);

    return (
        <motion.div
            initial={{ y: 0 }} // Start at the original position
            animate={{
                y: [0, moveDown, moveDown, 0], // Move down, pause, and go back instantly
            }}
            transition={{
                duration: movingDuration, // Duration for the upward movement
                ease: 'easeOut',
                times: [0, 0.8, 0.8, 1], // Pause at the peak before returning instantly
                repeat: Infinity, // Repeat infinitely
            }}
        >
            <img width={274} src={project.img} alt="" />
        </motion.div>
    );
};

export default ProjectImageTwo;
