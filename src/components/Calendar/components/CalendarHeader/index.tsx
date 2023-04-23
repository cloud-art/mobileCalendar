import React, { memo, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Text from '../../../shared/Text'
import Flex from '../../../shared/Flex'
import SvgContainer from '../../../shared/SvgContainer'
import ButtonDefault from '../../../shared/ButtonDefault'
import Modal from 'react-modal'
import ModalForm from './ModalForm'
import { useActions } from '../../../../hooks/useAction'
import moment from 'moment'

const StyledCalendarHeader = styled.div`
position: relative;
width: 100%;
padding: 2em;
border-bottom: 1px solid rgb(235, 235, 235);
`

const StyledModal = styled(Modal)`
margin: 20vh auto 0 auto;
width: 300px;
height: 200px;
background-color: rgb(230, 230, 231); 
border-radius: 20px;
align-self: center;
display: flex;
align-items: center;
justify-content: center;
`

const CalendarHeader = memo(({
}) => {
    const { addEvent } = useActions()

    const [modalIsOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleAddEvent = (date: string) => {
        if (moment(date, 'YYYY-MM-DD HH:mm:ss').isValid()) {
            const time = parseInt(moment(date, 'YYYY-MM-DD HH:mm:ss').format('X'))
            addEvent({ id: time, date: time, desc: 'added' })
        }
    }

    return (
        <StyledCalendarHeader>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize='big'>React Calendar</Text>
                <ButtonDefault onClick={handleOpenModal}>
                    <SvgContainer fontSize='2em' color='red'><FiPlus /></SvgContainer>
                </ButtonDefault>
                <StyledModal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    ariaHideApp={false}
                    portalClassName="modal-portal"
                >
                    <ModalForm
                        handleCloseModal={handleCloseModal}
                        handleAddEvent={handleAddEvent}
                    ></ModalForm>
                </StyledModal>
            </Flex>
        </StyledCalendarHeader>
    )
})

export default CalendarHeader