"use client"

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Link from "next/link"
import React from "react"

interface Slide {
    [key: string]: [string, number]
}

export default function Carousel({ slide, children }: {slide: Slide, children: React.ReactNode}) {
    const {isOpen, onOpenChange, onOpen, onClose} = useDisclosure()

    const slideArray = Object.entries(slide).map(([key, value]) => ({ key, value }));

    return(
        <Link 
            href="#"
        >
            <div onClick={onOpen}>
                {children}
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
                    <ModalContent>
                        <Swiper
                            navigation
                            pagination={{
                                type: "fraction"
                            }}
                            modules={[Pagination, Navigation]}
                            loop
                            className="flex w-[90%]"
                        >
                            {slideArray.map((image, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <ModalHeader>{image.key}</ModalHeader>
                                        <ModalBody >
                                            <Image src={image.value[0]} alt={image.key} width={400} height={100} className="flex self-center mb-7"/>
                                        </ModalBody>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    <ModalFooter>
                            <Button onClick={onClose}>Fechar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </Link>
    )
}