import { getProperties } from "@/lib/api";
// שימוש בנתיב יחסי כדי לוודא שנטליפיי מוצא את הקומפוננטה המקורית שלך
import PropertyCard from "../../../components/PropertyCard"; 

export default async function SelectedPage() {
  const data = await getProperties();
  
  // הגנה על הנתונים כדי למנוע קריסה (הסיבה המקורית לתקלה)
  const properties = Array.isArray(data) ? data : [];
  const filteredProperties = properties.filter((p: any) => p.category === 'selected');

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gold">נכסים נבחרים</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property: any) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center col-span-full">לא נמצאו נכסים זמינים כרגע.</p>
        )}
      </div>
    </div>
  );
}
