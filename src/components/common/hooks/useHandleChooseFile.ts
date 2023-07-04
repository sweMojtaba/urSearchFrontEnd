import { useCallback } from "react";

export default function useHandleChooseFile(
    setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>
): () => void {
    
    const handleChooseFile = useCallback(() => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');

        fileSelector.onchange = (e) => {
            if (e.target instanceof HTMLInputElement && e.target.files) {
                setSelectedFile(e.target.files[0]);
            }
        };

        fileSelector.click();
    }, []);
    
    return handleChooseFile;
}
