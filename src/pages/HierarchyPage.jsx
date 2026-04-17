import React from 'react';
import { Network } from 'lucide-react';

const orgData = {
  id: 'EMP-001',
  name: 'John Banda',
  role: 'Regional Director',
  country: 'Zambia',
  children: [
    {
      id: 'EMP-002',
      name: 'Mary Phiri',
      role: 'HR Manager',
      country: 'Zambia',
      children: [
        {
          id: 'EMP-003',
          name: 'James Mulenga',
          role: 'IT Support',
          country: 'Angola',
          children: []
        }
      ]
    },
    {
      id: 'EMP-005',
      name: 'Paul Chanda',
      role: 'Sales Lead',
      country: 'DRC',
      children: []
    },
    {
      id: 'EMP-004',
      name: 'Sarah Musonda',
      role: 'Accountant',
      country: 'Mozambique',
      children: []
    }
  ]
};

const OrgNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Node Box */}
      <div className="bg-white border-2 border-primary/20 hover:border-primary shadow-sm rounded-xl p-4 w-48 text-center transition-all duration-300 relative z-10">
        <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-500 mb-2 border border-gray-200">
          {node.name.charAt(0)}{node.name.split(' ')[1]?.charAt(0)}
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-tight">{node.name}</h3>
        <p className="text-xs font-medium text-primary mt-1">{node.role}</p>
        <span className="inline-block mt-2 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-[10px] uppercase font-bold text-gray-500 tracking-wider">
          {node.country}
        </span>
      </div>
      
      {/* Children branches */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center mt-0">
          {/* Vertical line dropping from parent */}
          <div className="w-px h-6 bg-gray-300"></div>
          
          <div className="flex relative">
            {/* Horizontal line connecting siblings (only draw if > 1 child) */}
            {node.children.length > 1 && (
              <div className="absolute top-0 left-[25%] right-[25%] h-px bg-gray-300 z-0"></div>
            )}
            
            <div className="flex justify-center gap-4 sm:gap-8 pt-0">
              {node.children.map((child, index) => (
                <div key={child.id} className="flex flex-col items-center relative">
                  {/* Vertical drops down to child */}
                  <div className="w-px h-6 bg-gray-300"></div>
                  <OrgNode node={child} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HierarchyPage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-50 text-primary rounded-lg">
            <Network size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Organization Hierarchy</h1>
            <p className="text-gray-500 text-sm mt-1">Live structural mapping based on Employee Data profiles.</p>
          </div>
        </div>
        <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium shadow-sm transition-all focus:ring-2 focus:ring-primary focus:outline-none hidden sm:block">
          Export Chart
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 sm:p-12 overflow-x-auto">
        <div className="min-w-[800px] flex justify-center py-8">
          <OrgNode node={orgData} />
        </div>
      </div>
    </div>
  );
};

export default HierarchyPage;
