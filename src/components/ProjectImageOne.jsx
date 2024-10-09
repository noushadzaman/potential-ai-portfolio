import { calculateMovingDuration, calculateMoveUp } from '@/utils';
import { motion } from 'framer-motion';

const ProjectImageOne = ({ project }) => {
    const moveUp = calculateMoveUp(project);
    const movingDuration = calculateMovingDuration(project);

    return (
        <>
            <motion.div
                className='cursor-progress max-lg:hidden'
                whileHover={{
                    y: moveUp,// Move up
                    transition: { duration: movingDuration } // Duration of the animation
                }}
                initial={{ y: 0 }} // Initial position of the element
            >
                <img width={274} src={project.img} alt="" />
            </motion.div>
        </>
    )
}

export default ProjectImageOne