import { useEffect } from "react";

export const useUpdateTitle = (title) => {
    useEffect(() => {
        document.title = `${title} • Кінобратва`;
    });
    return null;
}
