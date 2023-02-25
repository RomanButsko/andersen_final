import { FC } from 'react'
import { ModalContent } from './ModalContent'
import { IModalPopUp } from './../popUp.interface'
import { Portal } from '../../../portal/Portal'
import { Modal } from '../../../ui/modal/Modal'

export const PopUpModal: FC<IModalPopUp> = (props) => {
    const { showModal, setShowModal, refModal } = props
    return (
        <Portal>
            <Modal
                show={showModal}
                onClose={setShowModal}
                ref={refModal}
                title={'Удалить'}
            >
                <ModalContent {...props} />
            </Modal>
        </Portal>
    )
}
