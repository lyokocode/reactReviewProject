import React, { useState } from 'react';
import people from "../data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";


const Reviev = () => {
    const [index, setIndex] = useState(0)
    const { name, image, job, title, id } = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        };
        if (number < 0) {
            return people.length - 1
        };
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)

        if (randomNumber === index) {
            randomNumber = index + 1
        }

        return setIndex(checkNumber(randomNumber))
    }

    return (
        <article key={id} className='review'>
            <figure className='imgContainer'>
                <span className='quoteIcon'>
                    <FaQuoteRight />
                </span>
                <img src={image} alt={name} className="personImage" />
            </figure>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{title}</p>
            <div className='buttonContainer'>
                <button className='prevButton' onClick={prevPerson}> <FaChevronLeft /> </button>
                <button className='randomButton' onClick={randomPerson}> suprise me </button>
                <button className='nextButton' onClick={nextPerson}> <FaChevronRight /> </button>
            </div>
        </article>
    )
}

export default Reviev