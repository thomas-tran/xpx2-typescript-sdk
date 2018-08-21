// tslint:disable-next-line:no-var-requires
const IFPS_API = require('ipfs-api');
import { from, Observable } from 'rxjs';
import { IFPSFile } from '../model/ipfs/ipfs-file';
import { IPFSNodeID } from '../model/ipfs/ipfs-node-id';

/**
 * Class represents the IPFS Service
 */
export class IpfsService {

    /**
     * The ipfsAPI instance
     */
    private ipfsAPI;

    /**
     * IpfsService
     * @param host the ipfs host
     * @param port the ipfs port
     * @param protocol the ipfs protocol
     */
    constructor(host: string, port: string, protocol?: string) {
        this.ipfsAPI = IFPS_API(host, port, protocol);
    }

    /**
     * Get the IFPS node id
     * @returns Obverable<NodeID>
     */
    public getIpfsNodeID(): Observable<IPFSNodeID> {
        return from(this.ipfsAPI.id());

    }

    /**
     * Save to Ipfs using buffer
     * @param buffer the file buffer
     */
    public saveToIpfs(buffer: Buffer): Observable<IFPSFile[]> {
        return from(this.ipfsAPI.add(buffer));
    }

}
