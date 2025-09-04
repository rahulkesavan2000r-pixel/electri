// Enhanced PowerCalc India - Complete Energy Management Platform JavaScript

// Application Data
const applicationData = {
    "states": [
        {"name": "Tamil Nadu", "code": "TN", "discom": "TNEB", "url": "tamil-nadu"},
        {"name": "Maharashtra", "code": "MH", "discom": "MSEDCL", "url": "maharashtra"},
        {"name": "Karnataka", "code": "KA", "discom": "BESCOM", "url": "karnataka"},
        {"name": "Delhi", "code": "DL", "discom": "BSES", "url": "delhi"},
        {"name": "Gujarat", "code": "GJ", "discom": "UGVCL", "url": "gujarat"},
        {"name": "Rajasthan", "code": "RJ", "discom": "AVVNL", "url": "rajasthan"},
        {"name": "West Bengal", "code": "WB", "discom": "WBSEDCL", "url": "west-bengal"},
        {"name": "Uttar Pradesh", "code": "UP", "discom": "UPPCL", "url": "uttar-pradesh"},
        {"name": "Andhra Pradesh", "code": "AP", "discom": "APSPDCL", "url": "andhra-pradesh"},
        {"name": "Telangana", "code": "TS", "discom": "TSSPDCL", "url": "telangana"}
    ],
    "faqCategories": [
        {
            "category": "Bill Calculation",
            "questions": [
                {
                    "question": "How to calculate electricity bill from meter reading?",
                    "answer": "To calculate your electricity bill from meter reading: 1) Note current meter reading, 2) Subtract previous month's reading, 3) Multiply units consumed by applicable slab rates, 4) Add fixed charges and taxes. Our calculator does this automatically for all Indian states."
                },
                {
                    "question": "What is a unit of electricity?",
                    "answer": "One unit of electricity equals 1 kilowatt-hour (kWh), which is the energy consumed by a 1000-watt appliance running for 1 hour. For example, a 100W bulb running for 10 hours consumes 1 unit."
                },
                {
                    "question": "How to read electricity meter?",
                    "answer": "For digital meters, note the numbers displayed. For analog meters, read dials from left to right, noting the number the pointer has passed. Always read when pointer is between numbers, take the lower number."
                }
            ]
        },
        {
            "category": "Tariffs & Charges", 
            "questions": [
                {
                    "question": "What are slab rates in electricity bill?",
                    "answer": "Slab rates are tiered pricing where you pay different rates for different consumption levels. For example: 0-100 units at ₹3/unit, 101-300 units at ₹5/unit, above 300 units at ₹7/unit."
                },
                {
                    "question": "What is Time-of-Day (ToD) tariff?",
                    "answer": "ToD tariff charges different rates based on time of electricity usage. Peak hours (evening) cost more, while off-peak hours (night/early morning) cost less, encouraging load balancing."
                }
            ]
        },
        {
            "category": "Bill Reduction",
            "questions": [
                {
                    "question": "How to reduce electricity bill in summer?",
                    "answer": "Summer bill reduction tips: 1) Set AC to 24-26°C, 2) Use fans with AC, 3) Seal room gaps, 4) Use LED bulbs, 5) Unplug devices when not in use, 6) Consider solar panels for high consumption."
                }
            ]
        }
    ],
    "blogPosts": [
        {
            "title": "10 Ways to Reduce Your Electricity Bill in Summer 2025",
            "slug": "reduce-electricity-bill-summer-2025",
            "excerpt": "Beat the heat without breaking the bank. Learn proven strategies to cut your summer electricity costs by up to 40%.",
            "category": "Energy Saving",
            "readTime": "8 min read"
        },
        {
            "title": "Understanding Time-of-Day Tariffs: Save Money with Smart Usage",
            "slug": "time-of-day-tariffs-explained", 
            "excerpt": "Master ToD tariffs to save thousands annually. Complete guide to peak, off-peak, and solar hour rates across Indian states.",
            "category": "Tariff Guide",
            "readTime": "6 min read"
        },
        {
            "title": "State-wise Electricity Tariff Comparison 2025",
            "slug": "state-wise-electricity-tariff-comparison-2025",
            "excerpt": "Compare electricity rates across all 36 Indian states and UTs. Find out which states offer the cheapest power.",
            "category": "Comparison",
            "readTime": "12 min read"
        }
    ],
    "blogFAQs": [
        {
            "category": "Electricity Savings",
            "questions": [
                {
                    "question": "Which appliance consumes the most electricity at home in India?",
                    "answer": "Typically, air conditioners (ACs) and water heaters (geysers) are the biggest electricity consumers in Indian homes. A 1.5-ton AC can consume 1.5-2 units per hour, while a 25-litre storage geyser can consume around 2 units for an hour of use."
                },
                {
                    "question": "How much money can I save with a 5-star rated appliance?",
                    "answer": "A 5-star rated refrigerator can save you up to ₹10,000 over its lifetime compared to a 1-star model. Similarly, a 5-star inverter AC can be 20-25% more efficient than a 3-star AC, leading to significant annual savings depending on your usage and local tariff."
                },
                {
                    "question": "Does switching off appliances from the plug really save electricity?",
                    "answer": "Yes, absolutely. Many modern electronics consume 'vampire power' or 'standby power' even when turned off by the remote. This can account for 5-10% of your total household electricity consumption. Always switch off the power button at the socket."
                },
                {
                    "question": "What is the ideal temperature to set my AC in India?",
                    "answer": "The Bureau of Energy Efficiency (BEE) recommends setting your air conditioner's default temperature to 24°C. For every degree you increase the temperature, you can save about 6% on your electricity consumption."
                },
                {
                    "question": "How can I calculate my potential savings before buying a new appliance?",
                    "answer": "You can use an online electricity bill calculator, like the one on our website. Input the appliance's wattage (power consumption), your daily usage hours, and your local per-unit electricity rate to get a precise estimate of its monthly running cost and potential savings."
                }
            ]
        },
        {
            "category": "Government Schemes & Tariffs",
            "questions": [
                {
                    "question": "What is a 'telescopic' vs 'non-telescopic' electricity tariff?",
                    "answer": "In a 'telescopic' tariff (common in states like Delhi), each slab is charged at its respective rate. In a 'non-telescopic' tariff (like in parts of Maharashtra), if your consumption crosses a certain slab, the highest slab rate is applied to all units consumed, making it much more expensive."
                },
                {
                    "question": "How do I know if I am eligible for an electricity subsidy?",
                    "answer": "Subsidy eligibility depends on your state of residence and your consumption level. Many states offer automatic subsidies for low-consumption domestic users (e.g., consuming less than 100 or 200 units). Check your state's DISCOM (Distribution Company) website for the latest eligibility criteria."
                },
                {
                    "question": "What are 'fixed charges' on my electricity bill?",
                    "answer": "Fixed charges are a monthly fee levied by the DISCOM based on the sanctioned load of your connection (measured in kilowatts, kW). This charge is for maintaining the electricity grid infrastructure and is payable even if your consumption is zero."
                },
                {
                    "question": "Is the electricity rate the same across India?",
                    "answer": "No, not at all. Electricity is a concurrent subject, and tariffs are determined by State Electricity Regulatory Commissions (SERCs). Rates vary significantly from state to state and even between different distribution companies within the same state."
                }
            ]
        }
    ],
    "glossaryTerms": [
        {"term": "kWh", "definition": "Kilowatt-hour - Unit of electrical energy equivalent to 1000 watts used for one hour"},
        {"term": "Demand Charge", "definition": "Fixed monthly charge based on maximum power demand, typically for commercial/industrial consumers"},
        {"term": "Fixed Charge", "definition": "Monthly charge that remains constant regardless of electricity consumption"},
        {"term": "FPPCA", "definition": "Fuel and Power Purchase Cost Adjustment - Variable charge to recover fuel cost fluctuations"},
        {"term": "Sanctioned Load", "definition": "Maximum electrical load approved by electricity board for a consumer connection"},
        {"term": "Slab Rate", "definition": "Tiered pricing structure where rates increase with higher consumption levels"}
    ]
};

// Complete States Data (Preserved from original calculator)
const statesData = {
    "MH": {
        "name": "Maharashtra",
        "code": "MH", 
        "discom": "MSEDCL",
        "regulator": "MERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2024-25 (Extended to 2025-26)",
        "tariff_status": "Final",
        "domestic": {
            "slabs": [
                {"min": 0, "max": 100, "rate": 4.43, "description": "0-100 units"},
                {"min": 101, "max": 300, "rate": 9.64, "description": "101-300 units"},
                {"min": 301, "max": 500, "rate": 12.83, "description": "301-500 units"},
                {"min": 501, "max": 999999, "rate": 14.33, "description": "Above 500 units"}
            ],
            "fixed_charges": 50,
            "electricity_duty": 16
        },
        "commercial": {
            "energy_rate": 9.30,
            "fixed_charge": 472
        },
        "special_conditions": ["Wheeling Charges", "Fuel Adjustment Charges"]
    },
    "TN": {
        "name": "Tamil Nadu",
        "code": "TN",
        "discom": "TANGEDCO", 
        "regulator": "TNERC",
        "has_phase_diff": false,
        "billing_cycle": "bi-monthly",
        "fy": "2025-26",
        "tariff_status": "Final",
        "has_consumption_switching": true,
        "has_government_subsidy": true,
        "domestic": {
            "consumption_below_500": {
                "slabs": [
                    {"min": 0, "max": 100, "rate": 0, "description": "0-100 units (Free)"},
                    {"min": 101, "max": 200, "rate": 2.35, "description": "101-200 units"},
                    {"min": 201, "max": 400, "rate": 4.70, "description": "201-400 units"},
                    {"min": 401, "max": 500, "rate": 6.30, "description": "401-500 units"}
                ],
                "fixed_charges": 0
            },
            "consumption_above_500": {
                "slabs": [
                    {"min": 0, "max": 100, "rate": 0, "description": "0-100 units (Free)"},
                    {"min": 101, "max": 400, "rate": 4.70, "description": "101-400 units"},
                    {"min": 401, "max": 500, "rate": 6.30, "description": "401-500 units"},
                    {"min": 501, "max": 600, "rate": 8.40, "description": "501-600 units"},
                    {"min": 601, "max": 800, "rate": 9.45, "description": "601-800 units"},
                    {"min": 801, "max": 1000, "rate": 10.50, "description": "801-1000 units"},
                    {"min": 1001, "max": 999999, "rate": 11.55, "description": "Above 1000 units"}
                ]
            }
        },
        "commercial": {
            "energy_rate": 9.4,
            "fixed_charge": 200
        },
        "special_conditions": ["Bi-monthly billing", "Consumption-based slab switching", "Free first 100 units"]
    },
    "UP": {
        "name": "Uttar Pradesh",
        "code": "UP",
        "discom": "UPPCL",
        "regulator": "UPERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2025-26 (Proposed)",
        "tariff_status": "Proposed",
        "domestic": {
            "slabs": [
                {"min": 0, "max": 150, "rate": 3.35, "description": "0-150 units"},
                {"min": 151, "max": 300, "rate": 4.85, "description": "151-300 units"},
                {"min": 301, "max": 500, "rate": 5.85, "description": "301-500 units"},
                {"min": 501, "max": 999999, "rate": 6.85, "description": "Above 500 units"}
            ],
            "fixed_charges": 75
        },
        "commercial": {
            "energy_rate": 6.50,
            "fixed_charge": 150
        }
    },
    "AP": {
        "name": "Andhra Pradesh",
        "code": "AP",
        "discom": "APEPDCL, APCPDCL, APSPDCL",
        "regulator": "APERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2025-26",
        "tariff_status": "Final",
        "domestic": {
            "slabs": [
                {"min": 0, "max": 75, "rate": 2.25, "description": "0-75 units"},
                {"min": 76, "max": 150, "rate": 3.90, "description": "76-150 units"},
                {"min": 151, "max": 225, "rate": 6.15, "description": "151-225 units"},
                {"min": 226, "max": 999999, "rate": 8.40, "description": "Above 225 units"}
            ],
            "fixed_charges": 50
        },
        "commercial": {
            "energy_rate": 8.50,
            "fixed_charge": 300
        }
    },
    "DL": {
        "name": "Delhi",
        "code": "DL",
        "discom": "TPDDL, BRPL, BYPL",
        "regulator": "DERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2024-25 (Interim orders for 2025-26)",
        "tariff_status": "Interim",
        "has_ppac": true,
        "ppac_rate": 0.0763,
        "domestic": {
            "slabs": [
                {"min": 0, "max": 200, "rate": 3.00, "description": "0-200 units"},
                {"min": 201, "max": 400, "rate": 4.50, "description": "201-400 units"},
                {"min": 401, "max": 800, "rate": 6.50, "description": "401-800 units"},
                {"min": 801, "max": 999999, "rate": 7.50, "description": "Above 800 units"}
            ],
            "fixed_charges": 25
        },
        "commercial": {
            "energy_rate": 8.00,
            "fixed_charge": 250
        },
        "special_conditions": ["PPAC charges of 7.63%"]
    },
    "GJ": {
        "name": "Gujarat",
        "code": "GJ",
        "discom": "DGVCL, MGVCL, PGVCL, UGVCL",
        "regulator": "GERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2024-25",
        "tariff_status": "Final",
        "has_smart_meter_rebate": true,
        "smart_meter_rebate": 0.02,
        "domestic": {
            "slabs": [
                {"min": 0, "max": 50, "rate": 3.60, "description": "0-50 units"},
                {"min": 51, "max": 150, "rate": 4.85, "description": "51-150 units"},
                {"min": 151, "max": 300, "rate": 6.10, "description": "151-300 units"},
                {"min": 301, "max": 999999, "rate": 7.30, "description": "Above 300 units"}
            ],
            "fixed_charges": 40
        },
        "commercial": {
            "energy_rate": 7.80,
            "fixed_charge": 200
        },
        "special_conditions": ["2% smart meter rebate available"]
    },
    "KA": {
        "name": "Karnataka",
        "code": "KA",
        "discom": "BESCOM, GESCOM, HESCOM, MESCOM",
        "regulator": "KERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2025-26 to 2027-28",
        "tariff_status": "Final",
        "domestic": {
            "slabs": [
                {"min": 0, "max": 30, "rate": 2.65, "description": "0-30 units"},
                {"min": 31, "max": 100, "rate": 3.35, "description": "31-100 units"},
                {"min": 101, "max": 200, "rate": 4.90, "description": "101-200 units"},
                {"min": 201, "max": 999999, "rate": 6.45, "description": "Above 200 units"}
            ],
            "fixed_charges": 60
        },
        "commercial": {
            "energy_rate": 8.20,
            "fixed_charge": 280
        }
    },
    "WB": {
        "name": "West Bengal",
        "code": "WB",
        "discom": "WBSEDCL, CESC",
        "regulator": "WBERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2025-26",
        "tariff_status": "Final",
        "domestic": {
            "slabs": [
                {"min": 1, "max": 100, "rate": 5.30, "description": "1-100 units"},
                {"min": 101, "max": 180, "rate": 5.97, "description": "101-180 units"},
                {"min": 181, "max": 300, "rate": 7.50, "description": "181-300 units"},
                {"min": 301, "max": 999999, "rate": 8.99, "description": "Above 300 units"}
            ],
            "fixed_charges": 80
        },
        "commercial": {
            "energy_rate": 9.20,
            "fixed_charge": 320
        }
    },
    "RJ": {
        "name": "Rajasthan",
        "code": "RJ",
        "discom": "JVVNL, AVVNL, JdVVNL",
        "regulator": "RERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2025-26",
        "tariff_status": "Final",
        "domestic": {
            "slabs": [
                {"min": 0, "max": 50, "rate": 4.75, "description": "0-50 units"},
                {"min": 51, "max": 150, "rate": 5.85, "description": "51-150 units"},
                {"min": 151, "max": 300, "rate": 6.50, "description": "151-300 units"},
                {"min": 301, "max": 999999, "rate": 7.95, "description": "Above 300 units"}
            ],
            "fixed_charges": 65
        },
        "commercial": {
            "energy_rate": 8.60,
            "fixed_charge": 300
        }
    },
    "TS": {
        "name": "Telangana",
        "code": "TS",
        "discom": "TGSPDCL, TGCPDCL",
        "regulator": "TSERC",
        "has_phase_diff": false,
        "billing_cycle": "monthly",
        "fy": "2025-26",
        "tariff_status": "Final",
        "domestic": {
            "slabs": [
                {"min": 0, "max": 100, "rate": 2.60, "description": "0-100 units"},
                {"min": 101, "max": 200, "rate": 4.20, "description": "101-200 units"},
                {"min": 201, "max": 300, "rate": 6.75, "description": "201-300 units"},
                {"min": 301, "max": 999999, "rate": 9.75, "description": "Above 300 units"}
            ],
            "fixed_charges": 45
        },
        "commercial": {
            "energy_rate": 8.80,
            "fixed_charge": 275
        }
    }
};

// Global variables
let currentStep = 1;
let selectedState = null;
let calculationData = {};
let slabChart = null;
let currentSection = 'calculator';

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing enhanced PowerCalc India...');
    try {
        initializeApp();
        setupEventListeners();
        populateContentSections();
        setupAnimations();
        setupIntersectionObserver();
        console.log('Enhanced app initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('Application failed to initialize. Please refresh the page.');
    }
});

function initializeApp() {
    const stateSelect = document.getElementById('state-select');
    if (!stateSelect) {
        throw new Error('State select element not found');
    }
    
    console.log('Populating state dropdown...');
    
    // Group states for better organization
    const stateGroups = {
        'Major States': ['MH', 'TN', 'UP', 'AP', 'DL', 'GJ', 'KA', 'WB', 'RJ', 'TS']
    };
    
    // Clear existing options except the first placeholder
    while (stateSelect.children.length > 1) {
        stateSelect.removeChild(stateSelect.lastChild);
    }
    
    Object.entries(stateGroups).forEach(([groupName, stateCodes]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = groupName;
        
        stateCodes.forEach(code => {
            if (statesData[code]) {
                const option = document.createElement('option');
                option.value = code;
                const statusIndicator = getStatusIndicator(statesData[code].tariff_status);
                option.textContent = `${statesData[code].name} ${statusIndicator}`;
                optgroup.appendChild(option);
            }
        });
        
        if (optgroup.children.length > 0) {
            stateSelect.appendChild(optgroup);
        }
    });
    
    console.log(`Populated ${stateSelect.children.length - 1} state options`);
}

function getStatusIndicator(status) {
    switch (status) {
        case 'Final': return '✓';
        case 'Proposed': return '⏳';
        case 'Interim': return '⚡';
        default: return '';
    }
}

function setupEventListeners() {
    console.log('Setting up enhanced event listeners...');
    
    // Navigation
    setupNavigation();
    
    // Calculator functionality (preserved)
    setupCalculatorListeners();
    
    console.log('Enhanced event listeners set up successfully');
}

function setupNavigation() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            navigateToSection(targetSection);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            if (navList) navList.classList.remove('active');
        });
    });
}

function setupCalculatorListeners() {
    // State selection
    const stateSelect = document.getElementById('state-select');
    if (stateSelect) {
        stateSelect.addEventListener('change', handleStateChange);
    }
    
    // Consumer type selection
    const consumerTypeSelect = document.getElementById('consumer-type');
    if (consumerTypeSelect) {
        consumerTypeSelect.addEventListener('change', handleConsumerTypeChange);
    }
    
    // Input method radio buttons
    const inputMethodRadios = document.querySelectorAll('input[name="input-method"]');
    inputMethodRadios.forEach(radio => {
        radio.addEventListener('change', handleInputMethodChange);
    });
    
    // Meter reading inputs
    const previousReadingInput = document.getElementById('previous-reading');
    const currentReadingInput = document.getElementById('current-reading');
    if (previousReadingInput) previousReadingInput.addEventListener('input', calculateUnitsFromReadings);
    if (currentReadingInput) currentReadingInput.addEventListener('input', calculateUnitsFromReadings);
    
    // Direct units input
    const directUnitsInput = document.getElementById('direct-units');
    if (directUnitsInput) directUnitsInput.addEventListener('input', validateDirectUnits);
    
    // Navigation buttons
    const nextStep1 = document.getElementById('next-step-1');
    const nextStep2 = document.getElementById('next-step-2');
    const prevStep2 = document.getElementById('prev-step-2');
    const prevStep3 = document.getElementById('prev-step-3');
    const calculateBtn = document.getElementById('calculate-bill');
    const newCalculationBtn = document.getElementById('new-calculation');
    const exportBtn = document.getElementById('export-bill');
    
    if (nextStep1) nextStep1.addEventListener('click', () => goToStep(2));
    if (nextStep2) nextStep2.addEventListener('click', () => goToStep(3));
    if (prevStep2) prevStep2.addEventListener('click', () => goToStep(1));
    if (prevStep3) prevStep3.addEventListener('click', () => goToStep(2));
    if (calculateBtn) calculateBtn.addEventListener('click', calculateBill);
    if (newCalculationBtn) newCalculationBtn.addEventListener('click', resetCalculator);
    if (exportBtn) exportBtn.addEventListener('click', exportBill);
}

function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        currentSection = sectionId;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateContentSections() {
    populateStatesSection();
    populateFAQSection();
    populateGlossarySection();
}

function populateStatesSection() {
    const statesGrid = document.getElementById('states-grid');
    if (!statesGrid) return;
    
    statesGrid.innerHTML = '';
    
    applicationData.states.forEach(state => {
        const stateData = statesData[state.code];
        if (!stateData) return;
        
        const stateCard = document.createElement('div');
        stateCard.className = 'state-card';
        stateCard.innerHTML = `
            <h3>${state.name}</h3>
            <p><strong>DISCOM:</strong> ${state.discom}</p>
            <p><strong>Regulator:</strong> ${stateData.regulator}</p>
            <p><strong>Billing Cycle:</strong> ${stateData.billing_cycle}</p>
            <span class="state-status state-status--${stateData.tariff_status?.toLowerCase() || 'final'}">
                ${stateData.tariff_status || 'Final'}
            </span>
        `;
        
        stateCard.addEventListener('click', () => {
            navigateToSection('calculator');
            const stateSelect = document.getElementById('state-select');
            if (stateSelect) {
                stateSelect.value = state.code;
                stateSelect.dispatchEvent(new Event('change'));
            }
        });
        
        statesGrid.appendChild(stateCard);
    });
}

function populateFAQSection() {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = '';
    
    applicationData.faqCategories.forEach((category, categoryIndex) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'faq-category';
        categorySection.innerHTML = `
            <h3 class="faq-category-title">
                <span class="category-icon">${getCategoryIcon(category.category)}</span>
                ${category.category}
            </h3>
        `;
        
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'faq-category-items';
        
        category.questions.forEach((item, questionIndex) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <button class="faq-question" aria-expanded="false" onclick="toggleFAQ(this)" data-category="${categoryIndex}" data-question="${questionIndex}">
                    <span class="faq-question-text">${item.question}</span>
                    <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">${item.answer}</div>
                </div>
            `;
            categoryContainer.appendChild(faqItem);
        });
        
        categorySection.appendChild(categoryContainer);
        faqContainer.appendChild(categorySection);
    });
    
    // Add blog FAQs to the main FAQ section
    if (applicationData.blogFAQs) {
        applicationData.blogFAQs.forEach((category, categoryIndex) => {
            const categorySection = document.createElement('div');
            categorySection.className = 'faq-category';
            categorySection.innerHTML = `
                <h3 class="faq-category-title">
                    <span class="category-icon">${getCategoryIcon(category.category)}</span>
                    ${category.category}
                </h3>
            `;
            
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'faq-category-items';
            
            category.questions.forEach((item, questionIndex) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <button class="faq-question" aria-expanded="false" onclick="toggleFAQ(this)" data-category="blog-${categoryIndex}" data-question="${questionIndex}">
                        <span class="faq-question-text">${item.question}</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">${item.answer}</div>
                    </div>
                `;
                categoryContainer.appendChild(faqItem);
            });
            
            categorySection.appendChild(categoryContainer);
            faqContainer.appendChild(categorySection);
        });
    }
}

function populateGlossarySection() {
    const glossaryContainer = document.querySelector('.glossary-container');
    if (!glossaryContainer) return;
    
    glossaryContainer.innerHTML = '';
    
    applicationData.glossaryTerms.forEach(term => {
        const glossaryItem = document.createElement('div');
        glossaryItem.className = 'glossary-item';
        
        glossaryItem.innerHTML = `
            <div class="glossary-term">${term.term}</div>
            <p class="glossary-definition">${term.definition}</p>
        `;
        
        glossaryContainer.appendChild(glossaryItem);
    });
}

// Enhanced Animation and Interaction Functions
function setupAnimations() {
    // Add entrance animations to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in');
    });
    
    // Add hover effects to interactive elements
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections and cards for scroll animations
    const elementsToAnimate = document.querySelectorAll('.section, .card, .faq-item, .blog-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// FAQ Toggle Function with Enhanced Animation
function toggleFAQ(questionElement) {
    const isActive = questionElement.classList.contains('active');
    const answer = questionElement.nextElementSibling;
    const icon = questionElement.querySelector('.faq-icon');
    
    // Close all other FAQs in the same category
    const category = questionElement.closest('.faq-category');
    const allQuestions = category.querySelectorAll('.faq-question');
    const allAnswers = category.querySelectorAll('.faq-answer');
    
    allQuestions.forEach(q => {
        q.classList.remove('active');
        q.setAttribute('aria-expanded', 'false');
        q.querySelector('.faq-icon').textContent = '+';
    });
    
    allAnswers.forEach(a => {
        a.classList.remove('open');
    });
    
    // Toggle current FAQ if it wasn't active
    if (!isActive) {
        questionElement.classList.add('active');
        questionElement.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
        icon.textContent = '×';
        
        // Smooth scroll to question
        questionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

// Enhanced Category Icon Function
function getCategoryIcon(category) {
    const icons = {
        'Bill Calculation': '🧮',
        'Tariffs & Charges': '💰', 
        'Bill Reduction': '💡',
        'Energy Savings': '⚡',
        'Solar Power': '☀️',
        'Government Schemes': '🏛️'
    };
    return icons[category] || '❓';
}

// Enhanced Blog Toggle Function
function toggleBlog(button) {
    const blogCard = button.closest('.blog-card');
    const preview = blogCard.querySelector('.blog-preview');
    const full = blogCard.querySelector('.blog-full');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        full.classList.add('hidden');
        button.textContent = '📖 Read Full Article';
        button.setAttribute('aria-expanded', 'false');
        preview.style.display = 'block';
    } else {
        full.classList.remove('hidden');
        button.textContent = '📖 Show Less';
        button.setAttribute('aria-expanded', 'true');
        preview.style.display = 'none';
        
        // Smooth scroll to the blog
        blogCard.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced Error Handling with Animations
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-notification animate-slide-down';
    errorDiv.innerHTML = `
        <div class="error-content">
            <span class="error-icon">⚠️</span>
            <span class="error-message">${message}</span>
            <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add error styles
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-error);
        color: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        max-width: 400px;
    `;
    
    document.body.appendChild(errorDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.classList.add('animate-fade-out');
            setTimeout(() => errorDiv.remove(), 300);
        }
    }, 5000);
}

// Calculator Functions (Preserved from original)
function handleStateChange() {
    const stateSelect = document.getElementById('state-select');
    const stateCode = stateSelect.value;
    const nextBtn = document.getElementById('next-step-1');
    
    console.log('State changed to:', stateCode);
    
    if (stateCode && statesData[stateCode]) {
        selectedState = statesData[stateCode];
        nextBtn.disabled = false;
        displayStateInfo(selectedState);
        updateConsumerTypeOptions();
    } else {
        nextBtn.disabled = true;
        selectedState = null;
        const stateInfo = document.getElementById('state-info');
        if (stateInfo) {
            stateInfo.classList.add('hidden');
        }
    }
}

function displayStateInfo(state) {
    const stateInfo = document.getElementById('state-info');
    if (!stateInfo) return;
    
    stateInfo.classList.remove('hidden');
    
    const stateName = document.getElementById('state-name');
    const stateRegulator = document.getElementById('state-regulator');
    const stateStatus = document.getElementById('state-status');
    const stateFy = document.getElementById('state-fy');
    const stateBillingCycle = document.getElementById('state-billing-cycle');
    
    if (stateName) stateName.textContent = state.name;
    if (stateRegulator) stateRegulator.textContent = state.regulator || 'N/A';
    if (stateStatus) stateStatus.textContent = state.tariff_status || 'N/A';
    if (stateFy) stateFy.textContent = state.fy || 'N/A';
    if (stateBillingCycle) stateBillingCycle.textContent = state.billing_cycle || 'N/A';
    
    const featuresContainer = document.getElementById('special-features');
    if (featuresContainer) {
        featuresContainer.innerHTML = '';
        
        const features = [];
        if (state.has_consumption_switching) features.push({text: 'Consumption Switching', class: 'feature-tag--subsidy'});
        if (state.has_smart_meter_rebate) features.push({text: 'Smart Meter Rebate', class: 'feature-tag--rebate'});
        if (state.has_government_subsidy) features.push({text: 'Government Subsidy', class: 'feature-tag--subsidy'});
        if (state.has_ppac) features.push({text: 'PPAC Charges', class: 'feature-tag--tod'});
        
        features.forEach(feature => {
            const tag = document.createElement('span');
            tag.className = `feature-tag ${feature.class}`;
            tag.textContent = feature.text;
            featuresContainer.appendChild(tag);
        });
    }
}

function updateConsumerTypeOptions() {
    const consumerTypeSelect = document.getElementById('consumer-type');
    if (!consumerTypeSelect || !selectedState) {
        console.log('Consumer type select or selected state not found');
        return;
    }
    
    console.log('Updating consumer type options for:', selectedState.name);
    
    // Clear existing options except the first placeholder
    while (consumerTypeSelect.children.length > 1) {
        consumerTypeSelect.removeChild(consumerTypeSelect.lastChild);
    }
    
    const availableTypes = [];
    if (selectedState.domestic) availableTypes.push({value: 'domestic', text: 'Domestic'});
    if (selectedState.commercial) availableTypes.push({value: 'commercial', text: 'Commercial'});
    
    console.log('Available consumer types:', availableTypes);
    
    availableTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type.value;
        option.textContent = type.text;
        consumerTypeSelect.appendChild(option);
        console.log('Added consumer type option:', type.text);
    });
    
    // Reset the next button state
    const nextBtn = document.getElementById('next-step-2');
    if (nextBtn) {
        nextBtn.disabled = true;
    }
    
    console.log('Consumer type dropdown updated with', availableTypes.length, 'options');
}

function handleConsumerTypeChange() {
    const consumerTypeSelect = document.getElementById('consumer-type');
    const consumerType = consumerTypeSelect.value;
    const nextBtn = document.getElementById('next-step-2');
    
    console.log('Consumer type changed to:', consumerType);
    
    if (consumerType && nextBtn) {
        nextBtn.disabled = false;
        console.log('Next button enabled');
    } else if (nextBtn) {
        nextBtn.disabled = true;
        console.log('Next button disabled');
    }
}

function handleInputMethodChange() {
    const selectedMethod = document.querySelector('input[name="input-method"]:checked');
    if (!selectedMethod) return;
    
    const directInput = document.getElementById('direct-input');
    const readingsInput = document.getElementById('readings-input');
    const calculatedUnits = document.getElementById('calculated-units');
    
    if (selectedMethod.value === 'direct') {
        if (directInput) directInput.classList.remove('hidden');
        if (readingsInput) readingsInput.classList.add('hidden');
        if (calculatedUnits) calculatedUnits.classList.add('hidden');
        validateDirectUnits();
    } else {
        if (directInput) directInput.classList.add('hidden');
        if (readingsInput) readingsInput.classList.remove('hidden');
        calculateUnitsFromReadings();
    }
    
    updateBillingCycleInfo();
}

function calculateUnitsFromReadings() {
    const previousReadingInput = document.getElementById('previous-reading');
    const currentReadingInput = document.getElementById('current-reading');
    const calculatedUnits = document.getElementById('calculated-units');
    const unitsDisplay = document.getElementById('units-display');
    const calculateBtn = document.getElementById('calculate-bill');
    
    if (!previousReadingInput || !currentReadingInput || !calculatedUnits || !unitsDisplay || !calculateBtn) return;
    
    const prevReading = parseFloat(previousReadingInput.value) || 0;
    const currReading = parseFloat(currentReadingInput.value) || 0;
    
    if (currReading > prevReading && prevReading >= 0) {
        const units = currReading - prevReading;
        unitsDisplay.textContent = units;
        calculatedUnits.classList.remove('hidden');
        calculateBtn.disabled = false;
    } else {
        calculatedUnits.classList.add('hidden');
        calculateBtn.disabled = true;
    }
}

function validateDirectUnits() {
    const directUnitsInput = document.getElementById('direct-units');
    const calculateBtn = document.getElementById('calculate-bill');
    
    if (!directUnitsInput || !calculateBtn) return;
    
    const units = parseFloat(directUnitsInput.value);
    calculateBtn.disabled = !(units > 0);
}

function updateBillingCycleInfo() {
    const billingCycleInfo = document.querySelector('.billing-cycle-info');
    if (!billingCycleInfo || !selectedState) return;
    
    let cycleText = selectedState.billing_cycle === 'bi-monthly' 
        ? 'Note: This state uses bi-monthly billing (2 months)' 
        : 'Note: This state uses monthly billing';
    
    if (selectedState.tariff_status) {
        cycleText += ` | Status: ${selectedState.tariff_status}`;
    }
    
    billingCycleInfo.textContent = cycleText;
}

function goToStep(step) {
    document.querySelectorAll('.form-step').forEach(stepEl => {
        stepEl.classList.add('hidden');
    });
    
    const targetStep = document.getElementById(`step-${step}`);
    if (targetStep) {
        targetStep.classList.remove('hidden');
    }
    
    currentStep = step;
    
    if (step === 3) {
        updateBillingCycleInfo();
    }
}

function calculateBill() {
    showLoading();
    
    try {
        const inputMethodRadio = document.querySelector('input[name="input-method"]:checked');
        const inputMethod = inputMethodRadio ? inputMethodRadio.value : 'direct';
        
        let units;
        if (inputMethod === 'direct') {
            const directUnitsInput = document.getElementById('direct-units');
            units = parseFloat(directUnitsInput.value);
        } else {
            const previousReadingInput = document.getElementById('previous-reading');
            const currentReadingInput = document.getElementById('current-reading');
            const prevReading = parseFloat(previousReadingInput.value);
            const currReading = parseFloat(currentReadingInput.value);
            units = currReading - prevReading;
        }
        
        const consumerTypeSelect = document.getElementById('consumer-type');
        const consumerType = consumerTypeSelect.value;
        
        calculationData = {
            state: selectedState,
            consumerType: consumerType,
            units: units,
            inputMethod: inputMethod,
            billingCycle: selectedState.billing_cycle
        };
        
        setTimeout(() => {
            try {
                const billDetails = performBillCalculation(calculationData);
                displayResults(billDetails);
                displayEnhancedAnalysis(billDetails);
                hideLoading();
                goToResults();
            } catch (error) {
                hideLoading();
                showError('Error calculating bill: ' + error.message);
            }
        }, 1500);
        
    } catch (error) {
        hideLoading();
        showError('Error preparing calculation: ' + error.message);
    }
}

function performBillCalculation(data) {
    const { state, consumerType, units } = data;
    const tariffData = state[consumerType];
    
    if (!tariffData) {
        throw new Error(`Tariff data not available for ${consumerType} in ${state.name}`);
    }
    
    let billDetails = {
        energyCharges: 0,
        fixedCharges: 0,
        additionalCharges: 0,
        subsidyAmount: 0,
        totalBeforeTax: 0,
        electricityDuty: 0,
        finalAmount: 0,
        slabBreakdown: []
    };
    
    if (consumerType === 'domestic') {
        billDetails = calculateDomesticBill(state, units, billDetails);
    } else {
        const rate = tariffData.energy_rate || tariffData.rate || 0;
        billDetails.energyCharges = units * rate;
        billDetails.slabBreakdown.push({
            description: `${units} units @ ₹${rate}/unit`,
            units: units,
            rate: rate,
            amount: billDetails.energyCharges
        });
    }
    
    billDetails.fixedCharges = tariffData.fixed_charges || tariffData.fixed_charge || 0;
    billDetails = applyStateSpecificCharges(state, billDetails, units, consumerType);
    
    billDetails.totalBeforeTax = billDetails.energyCharges + billDetails.fixedCharges + billDetails.additionalCharges - billDetails.subsidyAmount;
    
    if (state.domestic && state.domestic.electricity_duty) {
        billDetails.electricityDuty = (billDetails.totalBeforeTax * state.domestic.electricity_duty) / 100;
    }
    
    billDetails.finalAmount = Math.round(billDetails.totalBeforeTax + billDetails.electricityDuty);
    
    return billDetails;
}

function calculateDomesticBill(state, units, billDetails) {
    let slabs = [];
    
    if (state.code === 'TN' && state.has_consumption_switching) {
        if (units <= 500) {
            slabs = state.domestic.consumption_below_500.slabs;
        } else {
            slabs = state.domestic.consumption_above_500.slabs;
        }
    } else {
        slabs = state.domestic.slabs;
    }
    
    return calculateSlabBill(slabs, units, billDetails);
}

function calculateSlabBill(slabs, units, billDetails) {
    let remainingUnits = units;
    
    for (const slab of slabs) {
        if (remainingUnits <= 0) break;
        
        let unitsInThisSlab;
        if (slab.max === 999999) {
            unitsInThisSlab = remainingUnits;
        } else {
            const slabCapacity = slab.max - slab.min + 1;
            unitsInThisSlab = Math.min(remainingUnits, slabCapacity);
        }
        
        const slabAmount = unitsInThisSlab * slab.rate;
        billDetails.energyCharges += slabAmount;
        
        billDetails.slabBreakdown.push({
            description: slab.description,
            units: unitsInThisSlab,
            rate: slab.rate,
            amount: slabAmount
        });
        
        remainingUnits -= unitsInThisSlab;
    }
    
    return billDetails;
}

function applyStateSpecificCharges(state, billDetails, units, consumerType) {
    if (state.code === 'GJ' && state.has_smart_meter_rebate) {
        billDetails.subsidyAmount = (billDetails.energyCharges + billDetails.fixedCharges) * state.smart_meter_rebate;
    }
    
    if (state.code === 'DL' && state.has_ppac) {
        billDetails.additionalCharges = billDetails.energyCharges * state.ppac_rate;
    }
    
    return billDetails;
}

function displayResults(billDetails) {
    // Update summary
    const resultState = document.getElementById('result-state');
    const resultConsumerType = document.getElementById('result-consumer-type');
    const resultUnits = document.getElementById('result-units');
    const resultBillingCycle = document.getElementById('result-billing-cycle');
    const resultTariffStatus = document.getElementById('result-tariff-status');
    
    if (resultState) resultState.textContent = `${calculationData.state.name} (${calculationData.state.discom})`;
    if (resultConsumerType) resultConsumerType.textContent = calculationData.consumerType.charAt(0).toUpperCase() + calculationData.consumerType.slice(1);
    if (resultUnits) resultUnits.textContent = `${calculationData.units} units`;
    if (resultBillingCycle) resultBillingCycle.textContent = calculationData.billingCycle.charAt(0).toUpperCase() + calculationData.billingCycle.slice(1);
    if (resultTariffStatus) resultTariffStatus.textContent = calculationData.state.tariff_status || 'N/A';
    
    // Update total amount
    const totalAmount = document.getElementById('total-amount');
    if (totalAmount) totalAmount.textContent = billDetails.finalAmount.toLocaleString('en-IN');
    
    // Update comparison cards
    const averageRate = billDetails.finalAmount / calculationData.units;
    const averageRateDisplay = document.getElementById('average-rate');
    if (averageRateDisplay) averageRateDisplay.textContent = averageRate.toFixed(2);
    
    generateBreakdownTable(billDetails);
    showStateNotes(calculationData.state);
    generateSlabChart(billDetails.slabBreakdown);
}

function displayEnhancedAnalysis(billDetails) {
    // Update efficiency grade
    const efficiencyGrade = document.getElementById('efficiency-grade');
    const averageRate = billDetails.finalAmount / calculationData.units;
    let grade = 'C';
    if (averageRate < 4) grade = 'A+';
    else if (averageRate < 6) grade = 'A';
    else if (averageRate < 8) grade = 'B';
    
    if (efficiencyGrade) efficiencyGrade.textContent = grade;
    
    // Update projections
    const monthlyProjection = document.getElementById('monthly-projection');
    const yearlyEstimate = document.getElementById('yearly-estimate');
    
    const monthly = calculationData.billingCycle === 'bi-monthly' ? billDetails.finalAmount / 2 : billDetails.finalAmount;
    const yearly = monthly * 12;
    
    if (monthlyProjection) monthlyProjection.textContent = `₹${monthly.toLocaleString('en-IN')}`;
    if (yearlyEstimate) yearlyEstimate.textContent = `₹${yearly.toLocaleString('en-IN')}`;
    
    // Generate recommendations
    generateRecommendations(billDetails);
}

function generateRecommendations(billDetails) {
    const recommendationsGrid = document.getElementById('recommendations-grid');
    if (!recommendationsGrid) return;
    
    recommendationsGrid.innerHTML = '';
    
    const recommendations = [];
    
    // High bill recommendations
    if (billDetails.finalAmount > 3000) {
        recommendations.push({
            title: 'Consider Solar Panels',
            description: 'Your high electricity bill makes solar panels a great investment. Save up to 70% on your electricity costs.',
            cta: 'Get Solar Quote',
            link: '#'
        });
        recommendations.push({
            title: 'Energy Audit Service',
            description: 'Professional energy audit can identify energy waste and save you 20-30% on your monthly bill.',
            cta: 'Book Audit',
            link: '#'
        });
    } else if (billDetails.finalAmount > 1500) {
        recommendations.push({
            title: 'Smart Energy Monitoring',
            description: 'Track your real-time energy consumption and identify high-usage appliances.',
            cta: 'Shop Smart Devices',
            link: '#'
        });
        recommendations.push({
            title: 'LED Bulb Upgrade',
            description: 'Replace all incandescent bulbs with LED lights to save up to 80% on lighting costs.',
            cta: 'Buy LED Bulbs',
            link: '#'
        });
    } else {
        recommendations.push({
            title: 'Energy Efficient Appliances',
            description: 'Upgrade to 5-star rated appliances for maximum energy savings on your next purchase.',
            cta: 'Browse Appliances',
            link: '#'
        });
    }
    
    recommendations.forEach(rec => {
        const recCard = document.createElement('div');
        recCard.className = 'recommendation-card';
        recCard.innerHTML = `
            <h4>${rec.title}</h4>
            <p>${rec.description}</p>
            <a href="${rec.link}" class="recommendation-cta">${rec.cta}</a>
        `;
        recommendationsGrid.appendChild(recCard);
    });
}

function generateBreakdownTable(billDetails) {
    const breakdownTable = document.getElementById('breakdown-table');
    if (!breakdownTable) return;
    
    breakdownTable.innerHTML = '';
    
    // Header
    const header = document.createElement('div');
    header.className = 'breakdown-row header';
    header.innerHTML = `
        <div class="breakdown-cell">Description</div>
        <div class="breakdown-cell">Units</div>
        <div class="breakdown-cell">Rate (₹)</div>
        <div class="breakdown-cell amount">Amount (₹)</div>
    `;
    breakdownTable.appendChild(header);
    
    // Slab breakdown rows
    billDetails.slabBreakdown.forEach(slab => {
        if (slab.units > 0) {
            const row = document.createElement('div');
            row.className = 'breakdown-row';
            row.innerHTML = `
                <div class="breakdown-cell">${slab.description}</div>
                <div class="breakdown-cell">${slab.units}</div>
                <div class="breakdown-cell">₹${slab.rate.toFixed(2)}</div>
                <div class="breakdown-cell amount">₹${slab.amount.toFixed(2)}</div>
            `;
            breakdownTable.appendChild(row);
        }
    });
    
    // Energy charges subtotal
    if (billDetails.energyCharges > 0) {
        const energyRow = document.createElement('div');
        energyRow.className = 'breakdown-row';
        energyRow.innerHTML = `
            <div class="breakdown-cell"><strong>Energy Charges</strong></div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell amount"><strong>₹${billDetails.energyCharges.toFixed(2)}</strong></div>
        `;
        breakdownTable.appendChild(energyRow);
    }
    
    // Fixed charges
    if (billDetails.fixedCharges > 0) {
        const fixedRow = document.createElement('div');
        fixedRow.className = 'breakdown-row';
        fixedRow.innerHTML = `
            <div class="breakdown-cell">Fixed Charges</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell amount">₹${billDetails.fixedCharges.toFixed(2)}</div>
        `;
        breakdownTable.appendChild(fixedRow);
    }
    
    // Additional charges
    if (billDetails.additionalCharges > 0) {
        const additionalRow = document.createElement('div');
        additionalRow.className = 'breakdown-row';
        additionalRow.innerHTML = `
            <div class="breakdown-cell">Additional Charges</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell amount">₹${billDetails.additionalCharges.toFixed(2)}</div>
        `;
        breakdownTable.appendChild(additionalRow);
    }
    
    // Subsidy/Rebate
    if (billDetails.subsidyAmount > 0) {
        const subsidyRow = document.createElement('div');
        subsidyRow.className = 'breakdown-row';
        subsidyRow.innerHTML = `
            <div class="breakdown-cell">Subsidy/Rebate</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell amount">-₹${billDetails.subsidyAmount.toFixed(2)}</div>
        `;
        breakdownTable.appendChild(subsidyRow);
    }
    
    // Subtotal before tax
    const subtotalRow = document.createElement('div');
    subtotalRow.className = 'breakdown-row';
    subtotalRow.innerHTML = `
        <div class="breakdown-cell"><strong>Subtotal (Before Tax)</strong></div>
        <div class="breakdown-cell">-</div>
        <div class="breakdown-cell">-</div>
        <div class="breakdown-cell amount"><strong>₹${billDetails.totalBeforeTax.toFixed(2)}</strong></div>
    `;
    breakdownTable.appendChild(subtotalRow);
    
    // Electricity duty/tax
    if (billDetails.electricityDuty > 0) {
        const dutyRow = document.createElement('div');
        dutyRow.className = 'breakdown-row';
        dutyRow.innerHTML = `
            <div class="breakdown-cell">Electricity Duty (${calculationData.state.domestic?.electricity_duty || 0}%)</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell">-</div>
            <div class="breakdown-cell amount">₹${billDetails.electricityDuty.toFixed(2)}</div>
        `;
        breakdownTable.appendChild(dutyRow);
    }
    
    // Final total
    const totalRow = document.createElement('div');
    totalRow.className = 'breakdown-row total';
    totalRow.innerHTML = `
        <div class="breakdown-cell"><strong>TOTAL AMOUNT</strong></div>
        <div class="breakdown-cell">-</div>
        <div class="breakdown-cell">-</div>
        <div class="breakdown-cell amount"><strong>₹${billDetails.finalAmount.toLocaleString('en-IN')}</strong></div>
    `;
    breakdownTable.appendChild(totalRow);
}

function generateSlabChart(slabBreakdown) {
    const chartContainer = document.getElementById('slab-chart');
    if (!chartContainer) return;
    
    // Destroy existing chart
    if (slabChart) {
        slabChart.destroy();
    }
    
    // Clear container
    chartContainer.innerHTML = '<canvas id="slabChartCanvas" width="400" height="400"></canvas>';
    
    const canvas = document.getElementById('slabChartCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Prepare data for chart
    const chartData = slabBreakdown.filter(slab => slab.amount > 0);
    if (chartData.length === 0) {
        chartContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No data to display</p>';
        return;
    }
    
    const labels = chartData.map(slab => slab.description);
    const data = chartData.map(slab => slab.amount);
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    
    // Check if Chart.js is available
    if (typeof Chart !== 'undefined') {
        slabChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, data.length),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const percentage = ((value / data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                                return `${label}: ₹${value.toFixed(2)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    } else {
        // Fallback: Create a simple text-based chart
        chartContainer.innerHTML = `
            <div style="text-align: center;">
                <h4>Slab-wise Breakdown</h4>
                ${chartData.map(slab => `
                    <div style="margin: 8px 0; padding: 8px; background: var(--color-bg-2); border-radius: 4px;">
                        <span>${slab.description}: ₹${slab.amount.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function showStateNotes(state) {
    const stateNotes = document.getElementById('state-notes');
    if (!stateNotes) return;
    
    const notesList = stateNotes.querySelector('.notes-list');
    if (!notesList) return;
    
    notesList.innerHTML = '';
    
    const notes = [];
    
    // Add general notes
    notes.push(`This calculation is based on ${state.tariff_status || 'final'} tariffs for FY ${state.fy || '2025-26'}`);
    notes.push(`Billing cycle: ${state.billing_cycle || 'Monthly'}`);
    
    // Add special conditions
    if (state.special_conditions && state.special_conditions.length > 0) {
        notes.push('Special conditions may apply:');
        state.special_conditions.forEach(condition => {
            notes.push(`• ${condition}`);
        });
    }
    
    // Add state-specific notes
    if (state.code === 'TN') {
        notes.push('Tamil Nadu offers free electricity for first 100 units for domestic consumers');
        notes.push('Consumption-based slab switching applies for higher usage');
    }
    
    if (state.code === 'DL') {
        notes.push('Delhi has interim tariff orders with PPAC charges');
    }
    
    if (state.code === 'GJ') {
        notes.push('Gujarat offers smart meter rebate of 2%');
    }
    
    // Add general disclaimer
    notes.push('Actual bill may vary due to meter reading dates, additional charges, and regulatory changes');
    notes.push('This is an estimate for reference purposes only');
    
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
    
    stateNotes.classList.remove('hidden');
}

// Utility Functions
function showLoading() {
    let loadingOverlay = document.getElementById('loading-overlay');
    if (!loadingOverlay) {
        loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'loading-overlay';
        loadingOverlay.className = 'loading';
        loadingOverlay.innerHTML = `
            <div class="loading-spinner"></div>
            <p>Calculating your electricity bill...</p>
            <small>Processing tariff data and applying state-specific rules</small>
        `;
        document.body.appendChild(loadingOverlay);
    }
    
    loadingOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showError(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div class="status status--error">
            <strong>Error:</strong> ${message}
        </div>
    `;
    
    const currentStepEl = document.querySelector('.form-step:not(.hidden)');
    if (currentStepEl) {
        currentStepEl.insertBefore(errorDiv, currentStepEl.firstChild);
    }
    
    setTimeout(() => {
        if (errorDiv && errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 10000);
}

function goToResults() {
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.add('hidden');
    });
    
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
        resultsSection.classList.remove('hidden');
    }
}

function resetCalculator() {
    selectedState = null;
    calculationData = {};
    currentStep = 1;
    
    const stateSelect = document.getElementById('state-select');
    if (stateSelect) stateSelect.value = '';
    
    const consumerTypeSelect = document.getElementById('consumer-type');
    if (consumerTypeSelect) consumerTypeSelect.value = '';
    
    const directUnitsInput = document.getElementById('direct-units');
    if (directUnitsInput) directUnitsInput.value = '';
    
    const previousReadingInput = document.getElementById('previous-reading');
    if (previousReadingInput) previousReadingInput.value = '';
    
    const currentReadingInput = document.getElementById('current-reading');
    if (currentReadingInput) currentReadingInput.value = '';
    
    const directRadio = document.querySelector('input[name="input-method"][value="direct"]');
    if (directRadio) directRadio.checked = true;
    
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) resultsSection.classList.add('hidden');
    
    goToStep(1);
    
    const nextStep1 = document.getElementById('next-step-1');
    const nextStep2 = document.getElementById('next-step-2');
    const calculateBtn = document.getElementById('calculate-bill');
    
    if (nextStep1) nextStep1.disabled = true;
    if (nextStep2) nextStep2.disabled = true;
    if (calculateBtn) calculateBtn.disabled = true;
    
    const stateInfo = document.getElementById('state-info');
    if (stateInfo) stateInfo.classList.add('hidden');
    
    if (slabChart) {
        slabChart.destroy();
        slabChart = null;
    }
}

function exportBill() {
    if (!calculationData || !calculationData.state) {
        showError('No calculation data available for export');
        return;
    }
    
    const exportData = {
        calculation: calculationData,
        timestamp: new Date().toLocaleString('en-IN'),
        bill: {
            state: calculationData.state.name,
            discom: calculationData.state.discom,
            consumerType: calculationData.consumerType,
            units: calculationData.units,
            totalAmount: document.getElementById('total-amount')?.textContent || 'N/A',
            billingCycle: calculationData.billingCycle
        }
    };
    
    try {
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `electricity-bill-${calculationData.state.code}-${Date.now()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div class="status status--success">
                Bill exported successfully! Check your downloads folder.
            </div>
        `;
        successDiv.style.position = 'fixed';
        successDiv.style.top = '20px';
        successDiv.style.right = '20px';
        successDiv.style.zIndex = '9999';
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            if (successDiv && successDiv.parentNode) {
                successDiv.remove();
            }
        }, 3000);
        
    } catch (error) {
        showError('Failed to export bill data');
    }
}