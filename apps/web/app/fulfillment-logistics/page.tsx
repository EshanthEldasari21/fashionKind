"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import "./fulfillement.css"
import { Card } from "@workspace/ui/components/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../packages/ui/src/components/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../packages/ui/src/components/table"

const Page = () => {

  const { t } = useTranslation()
  const shipments = [
    {
      shipment: "FK-2026-0847",
      route: "Barranquilla, CO → [NewCo] WH - Columbus, OH",
      stage: t("freight"),
      status: t("inTransit"),
      eta: "Mar 14",
      cost: "$1,840",
      savings: "$1,080",
    },
    {
      shipment: "FK-2026-0846",
      route: "Paris, FR → [NewCo] WH - Columbus, OH",
      stage: t("customs"),
      status: t("customsHold"),
      eta: "Mar 12",
      cost: "$2,150",
      savings: "$1,260",
    },
    {
      shipment: "FK-2026-0845",
      route: "São Paulo, BR → [NewCo] WH - Columbus, OH",
      stage: t("fulfillmentReady"),
      status: t("warehouseReceived"),
      eta: t("received"),
      cost: "$1,560",
      savings: "$915",
    },
    {
      shipment: "FK-2026-0844",
      route: "Barranquilla, CO → [NewCo] WH - Columbus, OH",
      stage: t("preFreight"),
      status: t("booked"),
      eta: "Mar 18",
      cost: "$680",
      savings: "$400",
    },
  ]

  return (
    <div className="p-6" style={{ maxWidth: "1200px", margin: "0 auto",  }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="fulfillment-logistics text-2xl font-bold">
            {t("title")}
          </h1>
          <p className="subtitle">{t("subtitle")}</p>
        </div>

        <button
          className="rounded-md  px-4 py-2 text-white"
          style={{ fontSize: "13px", backgroundColor: "#A87329" }}
        >
          {t("newShipment")}
        </button>
      </div>

      <div className="flex gap-5 my-5">
        <Card style={{ padding: "10px 15px", width: "250px", borderColor: "#FFC778", borderWidth: "1px" }}>
          <h2 className="text-lg font-bold" >3</h2>
          <p className="subtitle flex flex-col ">
            <span style={{fontWeight: "600"}}>{t("activeShipments")}</span>
            <span style={{fontSize: "12px"}}>{t("clickToView")}</span>
          </p>
        </Card>

        <Card style={{ padding: "10px 15px", width: "250px", borderColor: "#FFC778", borderWidth: "1px" }}>
          <h2 className="text-lg font-bold">428</h2>
          <p className="subtitle flex flex-col gap-1">
            <span style={{fontWeight: "600"}}>{t("warehouseUnits")}</span>
            <span style={{fontSize: "12px"}}>{t("locations")}</span>
          </p>
        </Card>

        <Card style={{ padding: "10px 15px", width: "250px", borderColor: "#FFC778", borderWidth: "1px" }}>
          <h2 className="text-lg font-bold">29</h2>
          <p className="subtitle flex flex-col gap-1">
            <span style={{fontWeight: "600"}}>{t("ordersToFulfill")}</span>
            <span style={{fontSize: "12px"}}>{t("readyToShip")}</span>
          </p>
        </Card>

        <Card style={{ padding: "10px 15px", width: "250px", borderColor: "#FFC778", borderWidth: "1px" }}>
          <h2 className="text-lg font-bold">$3,655</h2>
          <p className="subtitle flex flex-col gap-1">
            <span style={{fontWeight: "600"}}>{t("totalSavings")}</span>
            <span style={{fontSize: "12px"}}>{t("individualRates")}</span>
          </p>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList variant="line"  >
          <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
          <TabsTrigger value="analytics">{t("analytics")}</TabsTrigger>
          <TabsTrigger value="reports">{t("reports")}</TabsTrigger>
        </TabsList>

        <hr style={{ marginTop: "-8px" }} />

        <TabsContent
          value="overview"
          style={{
            border: "1px solid #DEDEDE",
            borderRadius: "4px",
            
            marginTop: "10px",
          }}
        >
          <Table>
            <TableHeader style={{ backgroundColor: "#EDE1CE" }}>
              <TableRow>
                <TableHead>{t("shipment")}</TableHead>
                <TableHead>{t("route")}</TableHead>
                <TableHead>{t("stage")}</TableHead>
                <TableHead>{t("status")}</TableHead>
                <TableHead>{t("eta")}</TableHead>
                <TableHead className="text-right">{t("cost")}</TableHead>
                <TableHead className="text-right">{t("savings")}</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {shipments.map((item) => (
                <TableRow key={item.shipment}>
                  <TableCell className="font-medium">
                    {item.shipment}
                  </TableCell>
                  <TableCell>{item.route}</TableCell>
                  <TableCell>
                    <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                      {item.stage}
                    </span>
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.eta}</TableCell>
                  <TableCell className="text-right">{item.cost}</TableCell>
                  <TableCell className="text-right text-green-600 font-medium">
                    {item.savings}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="analytics">
          <p>{t("analyticsContent")}</p>
        </TabsContent>

        <TabsContent value="reports">
          <p>{t("reportsContent")}</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Page