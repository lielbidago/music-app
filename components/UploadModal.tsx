'use client'

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal"

const UploadModal = () => {

    const uploadModal = useUploadModal();

    const onChange = (open:boolean) => {
        if (!open) {
            // TODO: reset form
            uploadModal.onClose();
        }
    }
    return (
        <Modal
            title='upload modal title'
            description='upload modal description'
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            upload content
        </Modal>
    )
}

export default UploadModal;