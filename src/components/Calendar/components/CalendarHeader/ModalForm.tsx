import React, { FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import ButtonDefault from '../../../shared/ButtonDefault'
import Flex from '../../../shared/Flex';
import Text from '../../../shared/Text';

interface ModalFormProps {
    handleCloseModal: React.MouseEventHandler<HTMLButtonElement>,
    handleAddEvent: (date: string) => void;
}

const StyledModalForm = styled.form`
width: 100%;
height: 100%;
`

const ModalTop = styled.div`
padding: 20px;
padding-bottom: 10px;
height: 100%;
width: 100%
`

const ModalBottom = styled.div`
border-top: 1px solid rgb(134, 134, 150);
`
const ButtonWrapper = styled.div`
width: 100%;
&:not(:last-child){
    border-right: 1px solid rgb(134, 134, 150);
}
`
const TextWrapper = styled.div`
padding: 15px;
`
const InputWrapper = styled.div`
padding-top: 20px;
height: 100%;
width: 100%;
`

const StyledInput = styled.input`
-webkit-appearance: none;
appearance: none;
outline: none;
background-color: white;
border: 1px solid rgb(142, 142, 147);
padding: 0 10px;
height: 100%;
width: 100%;
font-size: 14px;
line-height: 10px;
`


const ModalForm: React.FC<ModalFormProps> = ({
    handleCloseModal,
    handleAddEvent,
}) => {
    const [value, setValue] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValid) {
            handleAddEvent(value)
        } else {
            alert("wrong format")
        }
    }

    useEffect(() => {
        const regex = new RegExp(/\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/i)
        if (regex.test(value) === true) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
        console.log(regex.test(value))
    }, [value])


    return (
        <StyledModalForm onSubmit={handleSubmit}>
            <Flex flexDirection='column' justifyContent='space-between' width='100%' height='100%'>
                <ModalTop>
                    <Flex flexDirection='column' justifyContent='space-between' alignItems='space-between' height='100%'>
                        <Flex flexDirection='column' alignItems='center'>
                            <Text fontSize='medium' fontWeight='600' color='black'>https://calendar.com</Text>
                            <Text color='black'>Enter event time:</Text>
                            <Text color='black'>YYYY-MM-DD HH:mm:ss</Text>
                        </Flex>
                        <InputWrapper>
                            <StyledInput value={value} onChange={e => setValue(e.target.value)}></StyledInput>
                        </InputWrapper>
                    </Flex>
                </ModalTop>
                <ModalBottom>
                    <Flex>
                        <ButtonWrapper>
                            <ButtonDefault onClick={handleCloseModal}>
                                <TextWrapper>
                                    <Text fontSize='big' color='blue'>Cancel</Text>
                                </TextWrapper>
                            </ButtonDefault>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <ButtonDefault type="submit" onClick={(e) => { if (isValid) { handleCloseModal(e) } }}>
                                <TextWrapper>
                                    <Text fontSize='big' color='blue'>OK</Text>
                                </TextWrapper>
                            </ButtonDefault>
                        </ButtonWrapper>
                    </Flex>
                </ModalBottom>
            </Flex >
        </StyledModalForm >
    )
}

export default ModalForm