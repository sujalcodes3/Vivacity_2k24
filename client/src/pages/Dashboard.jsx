import React, { useRef, useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import "../components/Dashboard.css";

const cards = [1, 2, 3];

const cardVariants = {

  selected: {

    rotateY: 180,

    scale: 1.1,

    transition: { duration: .35 },

    zIndex: 10,

    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'

  },

  notSelected: i => ({

    rotateY: i * 15,

    scale: 1 - Math.abs(i * 0.15),

    x: i ? i * 50 : 0,

    opacity: 1 - Math.abs(i * .15),

    zIndex: 10 - Math.abs(i),

    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',

    transition: { duration: .35 }

  })

}

const Dashboard = () => {

    const [selectedCard, setSelectedCard] = useState(null);

    const [{ 

      startX,

      startScrollLeft,

      isDragging

    }, setDragStart] = useState({ 

      startX: undefined, 

      startScrollLeft: undefined, 

      isDragging: false

    });

    const containerRef = useRef();

    const cardRefs = useRef(new Array());

    useEffect(() => {

      const { scrollWidth, clientWidth } = containerRef.current;

      const halfScroll = (scrollWidth - clientWidth) / 2;

      containerRef.current.scrollLeft = halfScroll;

    }, [containerRef.current]); 

    const handleMouseDown = e => {

      setDragStart({ 

        startX: e.pageX - containerRef.current.offsetLeft,

        startScrollLeft: containerRef.current.scrollLeft,

        isDragging: true

      });

    }

    const handleMouseMove = e => {

      if (!isDragging || selectedCard) return;

      const x = e.pageX - containerRef.current.offsetLeft;

      const walk = x - startX;

      containerRef.current.scrollLeft = startScrollLeft - walk;

    }

    const selectCard = card => {

      setSelectedCard(selectedCard ? null : card);

      

      if (card && !selectedCard) {

        cardRefs.current[card - 1].scrollIntoView({

          behavior: 'smooth',

          block: 'nearest',

          inline: 'center'

        }); 

      }

    }

    const handleCardMouseUp = (e, card) => {

      if (isDragging) {

        const x = e.pageX - containerRef.current.offsetLeft;

        const walk = x - startX;

        if (Math.abs(walk) < 5) selectCard(card);

      } else selectCard(card);

    }

    return (

      <div 

        className="flashcards min-h-screen w-full"

        onMouseDown={handleMouseDown}

        onMouseUp={() => setDragStart(prev => ({ ...prev, isDragging: false }))}

        onMouseMove={handleMouseMove}

      >

        <div 

          className="flashcards__container" 

          ref={containerRef}

        >

            <motion.div 

            className="card flex flex-col justify-center items-center" 

            key={1}

            ref={el => cardRefs.current.push(el)}

            onMouseUp={e => handleCardMouseUp(e, 1)}

            variants={cardVariants}

            animate={selectedCard === 1 ? "selected" : "notSelected"}

            custom={selectedCard ? selectedCard - 1 : 0}

            >
                <motion.h2 
                className='text-2xl'
                style={{
                    rotateY: selectedCard === 1 ? "180deg" : "0deg",
                    backfaceVisibility: "visible",
                }}>
                    { selectedCard === 1 ? "Flipped" : "Profile"}
                </motion.h2>
            </motion.div>

            <motion.div 

              className="card flex flex-col justify-center items-center" 

              key={2}

              ref={el => cardRefs.current.push(el)}

              onMouseUp={e => handleCardMouseUp(e, 2)}

              variants={cardVariants}

              animate={selectedCard === 2 ? "selected" : "notSelected"}

              custom={selectedCard ? selectedCard - 2 : 0}

            > 
                <motion.h2 
                className='text-2xl'
                style={{
                    rotateY: selectedCard === 2 ? "180deg" : "0deg",
                    backfaceVisibility: "visible",
                }}>
                    { selectedCard === 2 ? "Flipped" : "Incentives"}
                </motion.h2>
            </motion.div>

            <motion.div 

              className="card flex flex-col justify-center items-center" 

              key={3}

              ref={el => cardRefs.current.push(el)}

              onMouseUp={e => handleCardMouseUp(e, 3)}

              variants={cardVariants}

              animate={selectedCard === 3 ? "selected" : "notSelected"}

              custom={selectedCard ? selectedCard - 3 : 0}

            > 
                <motion.h2 
                className='text-2xl'
                style={{
                    rotateY: selectedCard === 3 ? "180deg" : "0deg",
                    backfaceVisibility: "visible",
                }}>
                    { selectedCard === 3 ? "Flipped" : "Rewards"}
                </motion.h2>
            </motion.div>

        </div>

      </div>

    )

}

export default Dashboard;