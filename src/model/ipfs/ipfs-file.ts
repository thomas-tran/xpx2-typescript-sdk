/**
 * Type represents the IPFS file content
 */
export type FileContent = object | Blob | string;

/**
 * Interface represents IPFS File
 */
export interface IFPSFile {
    path: string;
    hash: string;
    size: number;
    content?: FileContent;
}
