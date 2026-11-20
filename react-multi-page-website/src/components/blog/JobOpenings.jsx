import React, { useEffect } from "react";
import { useParams } from "react-router";

function JobOpenings() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  const [selectedMenu, setSelectedMenu] = React.useState(null);

  const toggleMenu = (menuId) => {
    if (selectedMenu === menuId) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menuId);
    }
  };

  return (
    <div className="home">
      <div className="menu-bar">
      <div className="menu-item" onClick={() => toggleMenu("kitchenStaff")}>
  <h2 style={{ color: '#F9EEC9', fontWeight: "bold" }}>Kitchen Staff</h2>
  {selectedMenu === "kitchenStaff" && (
    <div className="submenu">
      <div id="kitchenStaff" className="section">
        <p>
        - Pizza Chef: Craft artisanal pizzas using the freshest ingredients and traditional Neapolitan techniques. Maintain cleanliness and organization in the kitchen while ensuring food quality and presentation met our standards. Salary range: $30,000 - $40,000 per year; Wage: $14 - $18 per hour; Working hours: 40-45 hours per week
        <br/>
        <br/>
        - Line Cook: Assist in food preparation and assembly, including pizzas, calzones, panini, and other menu items. Work efficiently in a fast-paced environment to meet customer demands while upholding food safety guidelines. Salary range: $25,000 - $35,000 per year; Wage: $12 - $16 per hour; Working hours: 35-40 hours per week
        <br/>
        <br/>
        - Prep Cook: Prepare ingredients, sauces, and dough according to recipes and specifications. Support the kitchen team by ensuring timely and accurate completion of prep tasks to streamline food production. Salary range: $22,000 - $30,000 per year; Wage: $10 - $14 per hour; Working hours: 30-35 hours per week
        </p>
      </div>
    </div>
  )}
</div>
        <div className="menu-item" onClick={() => toggleMenu("customerService")}>
        <h2 style={{ color: '#F9EEC9', fontWeight: "bold" }}>Customer Service</h2>
          {selectedMenu === "customerService" && (
            <div className="submenu">
              <div id="customerService" className="section">
                <p>
                - Front-of-House Manager: Oversee daily operations of the dining area, including managing staff, handling customer inquiries and concerns, and ensuring a positive dining experience for all guests. Salary range: $40,000 - $50,000 per year; Wage: $18 - $22 per hour; Working hours: 45-50 hours per week
                <br/>
                <br/>
                - Waitstaff: Greet and seat guests, take orders, and deliver food and beverages with a friendly and efficient attitude. Provide exceptional customer service by anticipating needs and exceeding expectations. Wage: $7.25 - $10 per hour (plus tips); Working hours: 25-30 hours per week (part-time) or 35-40 hours per week (full-time)
                <br/>
                <br/>
                - Host/Hostess: Welcome guests with a warm and friendly demeanor, manage reservations, and maintain cleanliness and organization in the dining area. Assist in coordinating seating arrangements to optimize guest satisfaction. Wage: $7.25 - $10 per hour (plus tips); Working hours: 20-25 hours per week (part-time) or 30-35 hours per week (full-time)
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleMenu("management")}>
        <h2 style={{ color: '#F9EEC9', fontWeight: "bold" }}>Management</h2>
          {selectedMenu === "management" && (
            <div className="submenu">
              <div id="management" className="section">
                <p>
                - General Manager: Lead and manage all aspects of restaurant operations, including staff supervision, inventory management, financial oversight, and customer relations. Develop and implement strategies to drive revenue and profitability while maintaining high standards of quality and service. Salary range: $50,000 - $60,000 per year; Working hours: 50-55 hours per week
                <br/>
                <br/>
                - Assistant Manager: Support the general manager in daily operations, including staff training and development, scheduling, and ensuring compliance with company policies and procedures. Assist in managing inventory, budgets, and administrative tasks to achieve operational excellence. Salary range: $35,000 - $45,000 per year; Working hours: 45-50 hours per week
                <br/>
                <br/>
                - Shift Supervisor: Supervise and coordinate activities of restaurant staff during assigned shifts, ensuring smooth operations and excellent customer service. Assist in training and motivating team members to achieve performance goals and maintain a positive work environment. Salary range: $25,000 - $30,000 per year; Working hours: 40-45 hours per week
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleMenu("marketing")}>
        <h2 style={{ color: '#F9EEC9', fontWeight: "bold" }}>Marketing</h2>
          {selectedMenu === "marketing" && (
            <div className="submenu">
              <div id="marketing" className="section">
                <p>
                - Marketing Coordinator: Develop and execute marketing strategies to promote Naples Pizza across digital and traditional channels. Coordinate advertising campaigns, social media presence, and community outreach efforts to increase brand visibility and drive customer engagement. Salary range: $40,000 - $50,000 per year; Working hours: 40-45 hours per week
                <br/>
                <br/>
                - Graphic Designer: Create visually appealing graphics and artwork for promotional materials, menus, signage, and digital platforms. Collaborate with the marketing team to maintain brand consistency and effectively communicate Naples Pizza's offerings and promotions. Salary range: $35,000 - $45,000 per year; Working hours: 40-45 hours per week
                <br/>
                <br/>
                - Social Media Specialist: Manage Naples Pizza's social media accounts, curate content, and engage with followers to enhance brand awareness and customer loyalty. Monitor analytics and trends to optimize social media performance and drive engagement. Salary range: $35,000 - $45,000 per year; Working hours: 40-45 hours per week
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleMenu("deliveryAndLogistics")}>
        <h2 style={{ color: '#F9EEC9', fontWeight: "bold" }}>Delivery and Logistics</h2>
          {selectedMenu === "deliveryAndLogistics" && (
            <div className="submenu">
              <div id="deliveryAndLogistics" className="section">
                <p>
                - Delivery Driver: Safely transport orders to customers' locations in a timely manner while providing friendly and courteous service. Ensure accuracy in order delivery and handle cash transactions with professionalism. Wage: $7.25 - $10 per hour (plus tips); Working hours: 20-25 hours per week (part-time) or 30-35 hours per week (full-time)
                <br/>
                <br/>
                - Logistics Coordinator: Coordinate delivery schedules, route planning, and vehicle maintenance to ensure efficient and timely delivery operations. Communicate with customers and drivers to resolve delivery-related issues and optimize delivery routes. Salary range: $35,000 - $45,000 per year; Working hours: 40-45 hours per week
                <br/>
                <br/>
                - Inventory Control Specialist: Manage inventory levels, track product movements, and conduct regular audits to ensure accuracy and minimize shrinkage. Collaborate with procurement and operations teams to maintain adequate stock levels and optimize inventory management processes. Salary range: $30,000 - $40,000 per year; Working hours: 40-45 hours per week
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleMenu("financeAndAdministration")}>
        <h2 style={{ color: '#F9EEC9', fontWeight: "bold" }}>Finance and Administration</h2>
          {selectedMenu === "financeAndAdministration" && (
            <div className="submenu">
              <div id="financeAndAdministration" className="section">
                <p>
                - Accountant: Manage financial transactions, including accounts payable, accounts receivable, and payroll processing. Prepare financial reports and budgets, analyze financial data, and provide insights to support business decision-making. Salary range: $45,000 - $55,000 per year; Working hours: 40-45 hours per week
                <br/>
                <br/>
                - Administrative Assistant: Provide administrative support to various departments, including scheduling appointments, managing correspondence, and maintaining records. Assist in coordinating meetings, events, and office supplies procurement to ensure smooth day-to-day operations. Salary range: $30,000 - $40,000 per year; Working hours: 40-45 hours per week
                <br/>
                <br/>
                - Human Resources Coordinator: Assist in recruiting, onboarding, and training new employees. Maintain employee records, administer benefits programs, and facilitate employee relations activities to promote a positive work environment. Salary range: $40,000 - $50,000 per year; Working hours: 40-45 hours per week
                </p>
              </div>
            </div>
          ) }
          </div>
      </div>
    </div>
  );
          }
export default JobOpenings;