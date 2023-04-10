import { useState } from "react"
import { Paper, Typography, Stack, IconButton } from "@mui/material"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import TeamStatsTable from "./TeamStatsTable"

const ConferenceStatsContainer = ({
  ConferenceName,
  firstDivName,
  secondDivName,
  firstDivision,
  secondDivision,
}) => {
  const [showFirst, setShowFirst] = useState(true)
  return (
    <Paper>
      <Stack direction="row" justifyContent="space-between">
        <Typography p={2} variant="h6" id="tableTitle" component="div">
          {ConferenceName}
        </Typography>
        <IconButton onClick={() => setShowFirst(!showFirst)}>
          <ArrowCircleRightIcon />
        </IconButton>
      </Stack>
      {showFirst ? (
        <TeamStatsTable
          header={firstDivName}
          teams={firstDivision.data}
          totalRank={false}
          elevation={0}
        />
      ) : (
        <TeamStatsTable
          header={secondDivName}
          teams={secondDivision.data}
          totalRank={false}
          elevation={0}
        />
      )}
    </Paper>
  )
}

export default ConferenceStatsContainer
