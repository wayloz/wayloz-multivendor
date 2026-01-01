"use client";

import { FETCH_ALL_SHOP_TYPES } from "@/lib/api/graphql/queries/shop-type";
import ApiErrorAlert from "@/lib/ui/useable-components/api-error-handle";
import CuisinesSliderCard from "@/lib/ui/useable-components/cuisines-slider-card";
import CuisinesSliderSkeleton from "@/lib/ui/useable-components/custom-skeletons/cuisines.slider.skeleton";
import { getGraphQLErrorMessage } from "@/lib/utils/methods/error";
import { useQuery } from "@apollo/client";
import { useTranslations } from "next-intl";

function ShopTypes() {
  const t = useTranslations();
  const { data, loading, error, refetch } = useQuery(FETCH_ALL_SHOP_TYPES);

  if (loading) {
    return <CuisinesSliderSkeleton />;
  }

  if (error) {
    return (
      <div className="mt-7 px-4">
        <div className="flex justify-start mb-4">
          <h2 className="font-inter font-bold text-xl sm:text-2xl text-gray-900 dark:text-white">
            {t("shop-types")}
          </h2>
        </div>

      <div className="my-4">
        <ApiErrorAlert
          error={getGraphQLErrorMessage(error, t)}
          refetch={refetch}
          queryName="FETCH_ALL_SHOP_TYPES"
          title={t("Error")}
         
        />
      </div>
      </div>
     
    );
  }

  return (
    <CuisinesSliderCard
      title="shop-types"
      data={data?.fetchAllShopTypes?.data || []}
      showLogo={false}
      cuisines={false}
      shopTypes={true}
    />
  );
}

export default ShopTypes;
