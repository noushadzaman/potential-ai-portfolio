import { motion } from 'framer-motion';
import { useState } from 'react';
import { calculateMovingDuration, calculateMoveDown } from '@/utils';

const ProjectImageMobile = ({ project }) => {
    const moveUp = calculateMoveDown(project);
    const movingDuration = calculateMovingDuration(project);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Optional: Reset the animation state after it's done
        setTimeout(() => {
            setIsClicked(false);
        }, movingDuration * 1000); // Convert to milliseconds
    };

    return (
        <motion.div
            className='cursor-progress lg:hidden'
            onClick={handleClick}
            animate={{
                y: isClicked ? -moveUp : 0, // Move up on click, return to original position otherwise
            }}
            transition={{
                duration: movingDuration,
                ease: 'easeOut',
            }}
            initial={{ y: 0 }} // Initial position of the element
        >
            <img width={274} src={project.img} alt="" />
        </motion.div>
    )
}

export default ProjectImageMobile