import Input from "../Input";

export const BASE_URL = 'http://localhost:3004';

export const columns = [
  {
    title: "HealthIndex",
    dataIndex: "healthIndex",
    key: "healthIndex",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "EndDate",
    dataIndex: "endDate",
    key: "endDate",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "MinValueDateTime",
    dataIndex: "minValueDateTime",
    key: "minValueDateTime",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "CowId",
    dataIndex: "cowId",
    key: "cowId",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "AnimalId",
    dataIndex: "animalId",
    key: "animalId",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "EventId",
    dataIndex: "eventId",
    key: "eventId",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "Deletable",
    dataIndex: "deletable",
    key: "deletable",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "LactationNumber",
    dataIndex: "lactationNumber",
    key: "lactationNumber",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "DaysInLactation",
    dataIndex: "daysInLactation",
    key: "daysInLactation",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "AgeInDays",
    dataIndex: "ageInDays",
    key: "ageInDays",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "StartDateTime",
    dataIndex: "startDateTime",
    key: "startDateTime",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "ReportingDateTime",
    dataIndex: "reportingDateTime",
    key: "reportingDateTime",
    render: (text) => <Input placeholder={text} />,
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <Input placeholder={text} />,
  },
];
