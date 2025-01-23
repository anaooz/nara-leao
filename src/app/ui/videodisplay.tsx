"use client"

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react"
import Link from "next/link"
import React from "react"

export default function VideoDisplayer({ 
    titulo, url, children 
}:{ titulo: string, url: string, children: React.ReactNode
}) {
    const {isOpen, onOpenChange, onOpen, onClose} = useDisclosure()

    return(
        <Link
            href="#"
        >
            <div onClick={onOpen} className="flex flex-col text-center items-center p-2">
                    {children}
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                    <ModalContent>
                        <ModalHeader>{titulo}</ModalHeader>
                        <ModalBody>
                        <iframe width="100%" height="650" src={`https://www.youtube.com/embed/${url}`} 
                            title="YouTube video player" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </ModalBody>
                        <ModalFooter>
                            <Button onPress={onClose}>
                                Fechar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </Link>
    )
}