export default function useDocumentVisibility(): {
    count: number;
    visible: boolean;
    onVisibilityChange: (callback: any) => void;
};
