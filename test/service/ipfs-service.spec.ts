import { expect } from 'chai';
import { IpfsService } from '../../src/service/ipfs-service';

describe('IPFSService', () => {

    before(() => {

    });

    it('#getIPFSInfo should return IFPS ID', () => {

        const ipfsService = new IpfsService('localhost', '5001');

        ipfsService.getIpfsNodeID().subscribe((res) => {
            // console.log(res);
            expect(res).to.be.exist;
            expect(res.id).to.have.string('Qm');
            expect(res.addresses).length.least(1);
        });
    });

    it('#saveToIPFS should return IPFS Hash', () => {

        const ipfsService = new IpfsService('localhost', '5001');

        const Buffer = require('buffer').Buffer;
        const file = Buffer.from('Proximax');
        const expectedHash = 'QmZRowDna67XQtEwzrv5JAKHfMGHSZpTscQgqmUm3NwE53';

        ipfsService.saveToIpfs(file).subscribe((res) => {
            // console.log(res);
            expect(res).to.be.exist;
            expect(res).length.least(1);
            expect(res[0].hash).to.equal(expectedHash);
        });
    });

    after(() => {

    });
});
