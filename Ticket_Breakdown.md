# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Notes:: 
 
// (Objects - Agent, Shift, Facility)

// Required

// Reports for Facilities on Agents regarding Shifts during a timeline - getShiftsByFacility(facilityId, options) = Shifts[..., \<Agent\>]

// Generate Report - generateReport = File (conversion of data (Shifts[..., \<Agent\>]) to PDF)

Objects(Meta)::

// Agent - {id, displayId, name, email, contact{number, country}}

// Shift - {id, time{from, to}, facility{id}, status[open, close], agent{id, customId, status[joined,]}}

// Facility - {id, displayId, name, ..., agents[{id, name, customId}]}


### Breakdown - backend


1. Save agent's customId for each facility (either at Shifts or Facility tables)
> API to save the agent's customId for specific facility

      implementation details [Case-1 : While shift confirming by facility we can ask for facility to provide customId, Case-2: At Facility table, as we are having all agents info, facility owner can go update his/her agents info respectively]
      acceptance criteria [agent should be associated with facility in any manner]
      time/effort estimate [1-2]

2. Get list of shifts by facilityId
> API to get list of shifts by facility during time period

      implementation details [get all shifts of facility in time range]
      acceptance criteria [facility should have access to shifts]
      time/effort estimate [1-2]

3. Get reports (from file a file-pdf) - 1
> API to generate a pdf from data and store in common_local_store/cdn/aws(blob)

      implementation details [list of data to file(pdf)]
      acceptance criteria [facility should have access to shifts]
      time/effort estimate [1-2]

4. Get reports (from file a file-pdf) - 2
> Generate a public/protected url from stored data file (common_local_store/cdn/aws(blob)) 

      implementation details [get public/protected link to download the file]
      acceptance criteria [facility should have access to shifts]
      time/effort estimate [1-2]
