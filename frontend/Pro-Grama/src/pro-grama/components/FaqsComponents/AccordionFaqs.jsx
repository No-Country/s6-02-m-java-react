import React from 'react'
import { Accordion } from "flowbite-react";
import "../FaqsComponents/FaqsStyles.css";

const AccordionFaqs = ({help , title}) => {
  return (
    <>
    <h2 className="text-3xl text-white mt-20 mb-4">{title}</h2>

    {help.map((item) => {
        return(
            <Accordion alwaysOpen={true} className="divide-transparent rounded-none border-0 max-lg:w-full w-2/3 ">
            <Accordion.Panel >
              <Accordion.Title className="focus:rounded-none focus:ring-0 border-b bg-transparent hover:bg-transparent px-0 text-DefaultWhite titleElements">
               {item.title}
              </Accordion.Title>
              <Accordion.Content className="px-0">
                <p className="mb-2 text-white text-justify">
                 {item.paragraph}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        )
    })}

   
    </>
  )
}

export default AccordionFaqs