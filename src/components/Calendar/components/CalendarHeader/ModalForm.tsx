import React, { FormEvent, memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import ButtonDefault from '../../../shared/ButtonDefault'
import Flex from '../../../shared/Flex';
import Text from '../../../shared/Text';

interface ModalFormProps {
    handleCloseModal: () => void,
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


const ModalForm: React.FC<ModalFormProps> = memo(({
    handleCloseModal,
    handleAddEvent,
}) => {
    const [value, setValue] = useState<string>('2023-04-16 02:00:00')
    const [isValid, setIsValid] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValid) {
            handleAddEvent(value)
            handleCloseModal()
        } else {
            alert("wrong format")
        }
    }

    // const handle

    useEffect(() => {
        const regex = new RegExp(/\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/i)
        if (regex.test(value) === true) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
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
                            <ButtonDefault type="button" onClick={handleCloseModal}>
                                <TextWrapper>
                                    <Text fontSize='big' color='blue'>Cancel</Text>
                                </TextWrapper>
                            </ButtonDefault>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <ButtonDefault type="submit">
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
})

export default ModalForm