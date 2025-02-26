import React, {ComponentType} from 'react';

export interface BlogPost {
  id: string;
  Content: ComponentType;
  createdAt: Date;
}

interface MasonryLayoutProps {
  items: BlogPost[];
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ items }) => {
  // Sort items by creation date (newest first)
  const sortedItems = [...items].sort((a, b) =>
    b.createdAt.getTime() - a.createdAt.getTime()
  );

  // Helper function to distribute items into columns
  const distributeItems = (numColumns: number) => {
    const columns: BlogPost[][] = Array.from({ length: numColumns }, () => []);

    sortedItems.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });

    return columns;
  };

  return (
    <div className="w-full">
      {/* Mobile: 1 column */}
      <div className="block sm:hidden">
        <div className="space-y-4">
          {sortedItems.map((item) => (
            <div key={item.id} className="w-full bg-gray-100">
              <item.Content />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet: 2 columns */}
      <div className="hidden sm:block lg:hidden">
        <div className="grid grid-cols-2 gap-4">
          {distributeItems(2).map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((item) => (
                <div key={item.id} className="w-full bg-gray-100">
                  <item.Content />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3 columns */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          {distributeItems(3).map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((item) => (
                <div key={item.id} className="blog_post w-full bg-gray-100 text-gray-600 p-4 rounded-md shadow">
                  <item.Content />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
