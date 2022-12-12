import { useGetAllDaos } from "~/graph";
import { Stack, Card, Heading } from "@kalidao/reality";

export default function DaosInfo() {
    const { data: daos, isLoading, isSuccess } = useGetAllDaos();

    const totalProposals = daos?.reduce((acc, dao) => {
        return acc + dao.proposals.length
    }, 0)

    // const totalVotes = daos?.reduce((acc, dao) => {
    //     return acc + dao.proposals.reduce((acc, proposal) => {
    //         return acc + proposal.votes.length
    //     }, 0)
    // }, 0)

    const info = [
        {
            heading: "Summoned",
            value: daos?.length
        },
        {
            heading: "Proposals",
            value: totalProposals
        },
    ]

    return <Stack direction={"horizontal"}>
        {isSuccess && info?.map((item, index) => {
            return <InfoCard key={index} heading={item.heading} value={item.value} />
        })}
    </Stack>
}

export const InfoCard = ({ heading, value }: {
    heading: string,
    value: number
}) => {
    return  <Card padding="6">
        <Stack>
    <Heading>{heading}</Heading>
    <Heading>{value}</Heading>
    </Stack>
</Card>
}