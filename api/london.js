export default async function handler(req, res) {
    try {
        const response = await fetch('https://ms.jr.jd.com/gw2/generic/CreatorSer/h5/m/pcQueryGoldQuote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Origin': 'https://show.jd.com',
                'Referer': 'https://show.jd.com/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                // 这里带上了你提供的完整 Cookie
                'Cookie': 'qid_uid=be32b05e-0277-4461-9e21-30b5a91f6918; qid_fs=1771990455167; qid_ls=1771990455167; qid_ts=1771990455176; qid_vis=1; qid_sid=be32b05e-0277-4461-9e21-30b5a91f6918-1; 3AB9D23F7A4B3CSS=jdd033EDE7SFJOMTVEWA4JRJDYQ4GIYEZTOYF5MRINMTUDBSHFYSUCRDMZWFH5BSS5ENFELKQASNY43J24A6AP3AZ7BQ5HEAAAAM4SLOODAQAAAAADGZETGZS7APKP4X; 3AB9D23F7A4B3C9B=3EDE7SFJOMTVEWA4JRJDYQ4GIYEZTOYF5MRINMTUDBSHFYSUCRDMZWFH5BSS5ENFELKQASNY43J24A6AP3AZ7BQ5HE; qid_seq=20; qid_evord=836'
            },
            body: 'reqData={}'
        });

        // 接收京东返回的原始数据并转发给前端
        const text = await response.text();
        
        // 允许跨域（以防你在本地调试）
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(text);
        
    } catch (error) {
        res.status(500).json({ error: '后端代理请求失败' });
    }
}
