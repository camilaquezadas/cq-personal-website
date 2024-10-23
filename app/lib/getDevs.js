
import { Card } from "../cards";

const Airtable = require('airtable');
const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN
}).base(process.env.NEXT_APP_BASE_ID)

const table = base(process.env.NEXT_APP_TABLE_ID)

const getCardedRecords = records => {
    return records.map(record => cardRecords(record))
}

const cardRecords = record => {
    return <Card name ={record.fields.Name} image={record.fields.Image} description={record.fields.Description}></Card>
}
export default async function getDevs() {
    const records = await table.select({}).all();
    const allCards = await getCardedRecords(records);
    return(
        allCards
    )
}