import { Tabs } from "ui"
import { AccountInfo } from "./AccountInfo"
import { HistoryBooking } from "./HistoryBooking"


export const AccountTemplate = () => {
  return (
    <div className="p-[50px">
        <Tabs
          tabPosition="left"
          items={[
            {
              key : "accountHistoryBooking",
              label : "Lịch sử đặt vé",
              children : <HistoryBooking/>
            },
            {
              key : "accountInfo",
              label: "Thông tin tài khoản",
              children : <AccountInfo/>
            }
          ]}
        />
    </div>
  )
}
