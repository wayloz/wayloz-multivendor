import HomeMiniCard from '@/lib/ui/useable-components/Home-miniCard'
import { useTranslations } from 'next-intl'
import React from 'react'
import boostSaleImage from "@/public/assets/images/png/power-online-sales-boost-sales.png";
import heavingListingImage from "@/public/assets/images/png/we-do-heavy-lifting.png";
import riskFreeImage from "@/public/assets/images/png/risk_free.png";
import powerOnlineSalesImage from "@/public/assets/images/png/boost-online-sales.png";

const MiniCards: React.FC = () => {
  const t = useTranslations();
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-sols-4 gap-8 mt-[30px] mb-[30px]'>
        <HomeMiniCard image={boostSaleImage.src} heading={t('MiniCardsHomeScreen.title1')} subText={t('MiniCardsHomeScreen.subText1')} backColor={"#fff0ee"} darkBackColor={"#4a2e2a"} headingColor={"#cb5965"} />
        <HomeMiniCard image={heavingListingImage.src} heading={t('MiniCardsHomeScreen.title2')} subText={t('MiniCardsHomeScreen.subText2')} backColor={"#eaf7fc"} darkBackColor={"#1e3a4a"} headingColor={"#009de0"} />
        <HomeMiniCard image={riskFreeImage.src} heading={t('MiniCardsHomeScreen.title3')} subText={t('MiniCardsHomeScreen.subText3')} backColor={"#fff9ef"} darkBackColor={"#4a3a21"} headingColor={"#c68000"} />
        <HomeMiniCard image={powerOnlineSalesImage.src} heading={t('MiniCardsHomeScreen.title4')} subText={t('MiniCardsHomeScreen.subText4')} backColor={"#f0faef"} darkBackColor={"#1e3a24"} headingColor={"#1dc707"} />
      </div>
    </div>
  )
}

export default MiniCards
