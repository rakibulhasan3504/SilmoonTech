
export interface PrintSpec {
  id: string;
  size: string;
  category: string;
  writingText: string;
}

export const printSpecs: PrintSpec[] = [
  // Page 1: Non-Class Print
  { id: "p1", size: "1.5\"", category: "Non-Class Print", writingText: "1.5\" uPVC PIPE ECONOMY (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p2", size: "1.5\"", category: "Non-Class Print", writingText: "1.5\" uPVC PIPE SUPER (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p3", size: "1.5\"", category: "Non-Class Print", writingText: "1.5\" uPVC PIPE STANDARD (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p4", size: "2\"", category: "Non-Class Print", writingText: "2\" uPVC PIPE STANDARD THICKNESS 1.90-2.10 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p5", size: "2\"", category: "Non-Class Print", writingText: "2\" uPVC PIPE SPECIAL THICKNESS 2.20-2.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p6", size: "3\"", category: "Non-Class Print", writingText: "3\" uPVC PIPE STANDARD THICKNESS 2.40-2.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p7", size: "3\"", category: "Non-Class Print", writingText: "3\" uPVC PIPE GOLD THICKNESS 2.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p8", size: "4\"", category: "Non-Class Print", writingText: "4\" uPVC PIPE STANDARD THICKNESS 2.90-3.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 2: Non-Class Print & Thread Pipe
  { id: "p9", size: "4\"", category: "Non-Class Print", writingText: "4\" uPVC PIPE GOLD THICKNESS 3.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p10", size: "5\"", category: "Non-Class Print", writingText: "5\" uPVC PIPE STANDARD THICKNESS 2.80-3.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p11", size: "8\"", category: "Non-Class Print", writingText: "8\" uPVC PIPE CASING THICKNESS 4.00-4.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p12", size: "10\"", category: "Non-Class Print", writingText: "10\" uPVC PIPE CASING THICKNESS 4.50-5.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p13", size: "1/2\"", category: "Thread Pipe", writingText: "1/2\" uPVC THREAD PIPE BS: 3505 THICKNESS 3.20-3.40 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p14", size: "3/4\"", category: "Thread Pipe", writingText: "3/4\" uPVC THREAD PIPE BS: 3505 THICKNESS 3.30-3.50 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p15", size: "1\"", category: "Thread Pipe", writingText: "1\" uPVC THREAD PIPE BS: 3505 THICKNESS 3.80-4.00 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p16", size: "1.25\"", category: "Thread Pipe", writingText: "1.25\" uPVC THREAD PIPE BS: 3505 THICKNESS 4.00-4.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p17", size: "1.5\"", category: "Thread Pipe", writingText: "1.5\" uPVC THREAD PIPE BS: 3505 THICKNESS 4.00-4.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p18", size: "2\"", category: "Thread Pipe", writingText: "2\" uPVC THREAD PIPE BS: 3505 THICKNESS 4.20-4.40 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 3: Plumbing Pipe & Schedule-40
  { id: "p19", size: "1/2\"", category: "Plumbing Pipe", writingText: "1/2\" uPVC PLUMBING PIPE SCHEDULE 40 THICKNESS 2.80-3.20 MM ASTM D-1785 (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p20", size: "3/4\"", category: "Plumbing Pipe", writingText: "3/4\" uPVC PLUMBING PIPE SCHEDULE 40 THICKNESS 2.80-3.30 MM ASTM D-1785 (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p21", size: "1\"", category: "Plumbing Pipe", writingText: "1\" uPVC PLUMBING PIPE SCHEDULE 40 THICKNESS 3.40-3.80 MM ASTM D-1785 (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p22", size: "1.25\"", category: "Plumbing Pipe", writingText: "1.25\" uPVC PLUMBING PIPE SCHEDULE 40 THICKNESS 3.60-4.00 MM ASTM D-1785 (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p23", size: "1.5\"", category: "Plumbing Pipe", writingText: "1.5\" uPVC PLUMBING PIPE SCHEDULE 40 THICKNESS 3.70-4.10 MM ASTM D-1785 (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p24", size: "2\"", category: "Plumbing Pipe", writingText: "2\" uPVC PLUMBING PIPE SCHEDULE 40 THICKNESS 3.90-4.30 MM ASTM D-1785 (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p25", size: "3/4\"", category: "Schedule-40", writingText: "3/4\" uPVC SCHEDULE-40 PIPE ASTM D-1785 (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p26", size: "1\"", category: "Schedule-40", writingText: "1\" uPVC SCHEDULE-40 PIPE ASTM D-1785 (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p27", size: "1.5\"", category: "Schedule-40", writingText: "1.5\" uPVC SCHEDULE-40 PIPE ASTM D-1785 (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 4: Silmoon SP Pipe & BS Pipe (Original)
  { id: "p28", size: "1.5\"", category: "Silmoon SP Pipe", writingText: "1.5\" uPVC PIPE CLASS-D (SP) THICKNESS 2.30-2.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p29", size: "3\"", category: "Silmoon SP Pipe", writingText: "3\" uPVC PIPE CLASS-C (SP) THICKNESS 3.50-4.10 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p30", size: "3\"", category: "Silmoon SP Pipe", writingText: "3\" uPVC PIPE CLASS-D (SP) THICKNESS 4.60-5.30 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p31", size: "4\"", category: "Silmoon SP Pipe", writingText: "4\" uPVC PIPE CLASS-C (SP) THICKNESS 4.50-5.20 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p32", size: "4\"", category: "Silmoon SP Pipe", writingText: "4\" uPVC PIPE CLASS-D (SP) THICKNESS 6.00-6.90 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p33", size: "5\"", category: "Silmoon SP Pipe", writingText: "5\" uPVC PIPE CLASS-C (SP) THICKNESS 5.50-6.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p34", size: "5\"", category: "Silmoon SP Pipe", writingText: "5\" uPVC PIPE CLASS-D (SP) THICKNESS 7.30-8.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p35", size: "8\"", category: "Silmoon SP Pipe", writingText: "8\" uPVC PIPE CLASS-C (SP) THICKNESS 7.80-9.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p36", size: "1/2\"", category: "All BS Pipe (Original)", writingText: "1/2\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 1.20-1.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 5: All BS Pipe (Original)
  { id: "p37", size: "1/2\"", category: "All BS Pipe", writingText: "1/2\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 1.60-1.80 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p38", size: "3/4\"", category: "All BS Pipe", writingText: "3/4\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 1.20-1.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p39", size: "3/4\"", category: "All BS Pipe", writingText: "3/4\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 1.80-2.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p40", size: "1\"", category: "All BS Pipe", writingText: "1\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 1.50-1.70 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p41", size: "1\"", category: "All BS Pipe", writingText: "1\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 2.20-2.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p42", size: "1.25\"", category: "All BS Pipe", writingText: "1.25\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 1.90-2.10 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p43", size: "1.5\"", category: "All BS Pipe", writingText: "1.5\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 2.50-3.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p44", size: "1.5\"", category: "All BS Pipe", writingText: "1.5\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 3.10-3.70 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p45", size: "2\"", category: "All BS Pipe", writingText: "2\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 2.50-3.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p46", size: "2\"", category: "All BS Pipe", writingText: "2\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 3.10-3.70 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 6: All BS Pipe (Original)
  { id: "p47", size: "2\"", category: "All BS Pipe", writingText: "2\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 3.90-4.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p48", size: "3\"", category: "All BS Pipe", writingText: "3\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 2.90-3.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p49", size: "3\"", category: "All BS Pipe", writingText: "3\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 3.50-4.10 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p50", size: "3\"", category: "All BS Pipe", writingText: "3\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 4.60-5.30 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p51", size: "3\"", category: "All BS Pipe", writingText: "3\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 5.70-6.60 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p52", size: "4\"", category: "All BS Pipe", writingText: "4\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 3.40-4.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p53", size: "4\"", category: "All BS Pipe", writingText: "4\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 4.50-5.20 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p54", size: "4\"", category: "All BS Pipe", writingText: "4\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 6.00-6.90 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p55", size: "4\"", category: "All BS Pipe", writingText: "4\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 7.30-8.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p56", size: "5\"", category: "All BS Pipe", writingText: "5\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 3.80-4.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 7: All BS Pipe (Original)
  { id: "p57", size: "5\"", category: "All BS Pipe", writingText: "5\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 5.50-6.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p58", size: "5\"", category: "All BS Pipe", writingText: "5\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 7.30-8.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p59", size: "5\"", category: "All BS Pipe", writingText: "5\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 9.00-10.40 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p60", size: "6\"", category: "All BS Pipe", writingText: "6\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 4.50-5.20 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p61", size: "6\"", category: "All BS Pipe", writingText: "6\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 6.60-7.60 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p62", size: "6\"", category: "All BS Pipe", writingText: "6\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 8.80-10.20 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p63", size: "6\"", category: "All BS Pipe", writingText: "6\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 10.80-12.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p64", size: "8\"", category: "All BS Pipe", writingText: "8\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 5.30-6.10 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p65", size: "8\"", category: "All BS Pipe", writingText: "8\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 7.80-9.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p66", size: "8\"", category: "All BS Pipe", writingText: "8\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 10.30-11.90 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 8: All BS Pipe (Original) & SDR Pipe
  { id: "p67", size: "8\"", category: "All BS Pipe", writingText: "8\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 12.40-14.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p68", size: "10\"", category: "All BS Pipe", writingText: "10\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 6.60-7.60 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p69", size: "10\"", category: "All BS Pipe", writingText: "10\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 9.70-11.20 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p70", size: "10\"", category: "All BS Pipe", writingText: "10\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 12.80-14.80 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p71", size: "10\"", category: "All BS Pipe", writingText: "10\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 15.70-18.10 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p72", size: "12\"", category: "All BS Pipe", writingText: "12\" uPVC PIPE CLASS-B, BS: 3505 THICKNESS 7.80-9.00 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p73", size: "12\"", category: "All BS Pipe", writingText: "12\" uPVC PIPE CLASS-C, BS: 3505 THICKNESS 11.50-13.30 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p74", size: "12\"", category: "All BS Pipe", writingText: "12\" uPVC PIPE CLASS-D, BS: 3505 THICKNESS 15.20-17.50 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p75", size: "12\"", category: "All BS Pipe", writingText: "12\" uPVC PIPE CLASS-E, BS: 3505 THICKNESS 18.70-21.60 MM (VCYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p76", size: "125mm", category: "SDR Pipe", writingText: "125mm uPVC PIPE SDR-65, ISO 4065 THICKNESS 2.70 MM AVG (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 9: SDR Pipe
  { id: "p77", size: "125mm", category: "SDR Pipe", writingText: "125mm uPVC PIPE SDR-41, ISO 4065 THICKNESS 3.50-3.80 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p78", size: "125mm", category: "SDR Pipe", writingText: "125mm uPVC PIPE SDR-33, ISO 4065 THICKNESS 4.30-4.50 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p79", size: "200mm", category: "SDR Pipe", writingText: "200mm uPVC PIPE SDR-81, ISO 4065 THICKNESS 2.50-2.80 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p80", size: "200mm", category: "SDR Pipe", writingText: "200mm uPVC PIPE SDR-65, ISO 4065 THICKNESS 3.10-3.40 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p81", size: "200mm", category: "SDR Pipe", writingText: "200mm uPVC PIPE SDR-41, ISO 4065 THICKNESS 4.90-5.10 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p82", size: "200mm", category: "SDR Pipe", writingText: "200mm uPVC PIPE SDR (SPL) ISO 4065 THICKNESS 3.90-4.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p83", size: "250mm", category: "SDR Pipe", writingText: "250mm uPVC PIPE SDR-81, ISO 4065 THICKNESS 3.10-3.30 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p84", size: "250mm", category: "SDR Pipe", writingText: "250mm uPVC PIPE SDR-65, ISO 4065 THICKNESS 3.90-4.10 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p85", size: "250mm", category: "SDR Pipe", writingText: "250mm uPVC PIPE SDR-41, ISO 4065 THICKNESS 6.20-6.40 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p86", size: "250mm", category: "SDR Pipe", writingText: "250mm uPVC PIPE SDR (SPL) ISO 4065 THICKNESS 4.90-5.30 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 10: SDR Pipe & New Item
  { id: "p87", size: "315mm", category: "SDR Pipe", writingText: "315mm uPVC PIPE SDR-81, ISO 4065 THICKNESS 4.00-4.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p88", size: "315mm", category: "SDR Pipe", writingText: "315mm uPVC PIPE SDR-65, ISO 4065 THICKNESS 4.90-5.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p89", size: "313mm", category: "SDR Pipe", writingText: "313mm uPVC PIPE SDR-41, ISO 4065 THICKNESS 6.90-7.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p90", size: "315mm", category: "SDR Pipe", writingText: "315mm uPVC PIPE SDR-33, ISO 4065 THICKNESS 8.60-8.80 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p91", size: "315mm", category: "SDR Pipe", writingText: "315mm uPVC PIPE SDR-26, ISO 4065 THICKNESS 10.70-11.00 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p92", size: "160mm", category: "New Item", writingText: "160mm uPVC PIPE STD THICKNESS 2.80-3.00 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p93", size: "200mm", category: "New Item", writingText: "200mm uPVC PIPE SDR-81 (SP) THICKNESS 2.50-3.00 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p94", size: "200mm", category: "New Item", writingText: "200mm uPVC PIPE SDR-65 (SP) THICKNESS 3.10-3.50 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p95", size: "250mm", category: "New Item", writingText: "250mm uPVC PIPE SDR-81 (SP) THICKNESS 3.10-3.50 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p96", size: "250mm", category: "New Item", writingText: "250mm uPVC PIPE SDR-65 (SP) THICKNESS 3.50-3.90 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 11: SWR Pipe
  { id: "p97", size: "32mm", category: "SWR Pipe", writingText: "32mm uPVC PIPE SWR ISO-4422-1990 THICKNESS 1.50-1.70 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p98", size: "40mm", category: "SWR Pipe", writingText: "40mm uPVC PIPE SWR ISO-4422-1990 THICKNESS 1.80-2.00 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p99", size: "50mm", category: "SWR Pipe", writingText: "50mm uPVC PIPE SWR ISO-4422-1990 THICKNESS 2.00-2.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p100", size: "80mm", category: "SWR Pipe", writingText: "80mm uPVC PIPE SWR SPL ISO-4422:1990 THICKNESS 1.60-1.80 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p101", size: "80mm", category: "SWR Pipe", writingText: "80mm uPVC PIPE SWR-1 ISO-4422:1990 THICKNESS 2.00-2.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p102", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR ECONOMY THICKNESS 1.60-1.80 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p103", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR SPL THICKNESS 2.00-2.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p104", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR DIAMOND THICKNESS 2.70 MM AVG (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p105", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR PLATINUM THICKNESS 2.70 MM AVG (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p106", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR-1 ISO-4422:1990 THICKNESS 2.70-2.90 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 12: SWR Pipe & SWR (SP)
  { id: "p107", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR-2 ISO-4422:1990 THICKNESS 3.00-3.20 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p108", size: "110mm", category: "SWR Pipe", writingText: "110mm uPVC PIPE SWR-3 ISO-4422:1990 THICKNESS 3.40-3.60 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p109", size: "160mm", category: "SWR Pipe", writingText: "160mm uPVC PIPE SWR SPECIAL THICKNESS 2.70-2.90 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p110", size: "160mm", category: "SWR Pipe", writingText: "160mm uPVC PIPE SWR-1 ISO-4422:1990 THICKNESS 3.20-3.40 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p111", size: "160mm", category: "SWR Pipe", writingText: "160mm uPVC PIPE SWR-2 ISO-4422:1990 THICKNESS 4.00-4.30 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p112", size: "160mm", category: "SWR Pipe", writingText: "160mm uPVC PIPE SWR-3 ISO-4422:1990 THICKNESS 4.50-4.80 MM (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p113", size: "110mm", category: "SWR (SP)", writingText: "110mm uPVC PIPE SWR (SP) THICKNESS 3.00 MM AVG (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p114", size: "160mm", category: "SWR (SP)", writingText: "160mm uPVC PIPE SWR (SP) THICKNESS 2.70 MM AVG (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p115", size: "160mm", category: "SWR (SP)", writingText: "160mm uPVC PIPE SWR (SP) THICKNESS 4.00 MM AVG (TYYYMMDDL01A) HH:MM:SS BSTI LOGO" },

  // Page 13: CPVC PIPE SDR-11 & CPVC PIPE SDR-13.5
  { id: "p116", size: "1/2\"", category: "CPVC SDR-11", writingText: "(N.B 15MM 1/2\") (OD15.9MM) SDR-11 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p117", size: "3/4\"", category: "CPVC SDR-11", writingText: "(N.B 20MM 3/4\") (OD22.2MM) SDR-11 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p118", size: "1.0\"", category: "CPVC SDR-11", writingText: "(N.B 25MM 1.0\") (OD28.5MM) SDR-11 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p119", size: "1.25\"", category: "CPVC SDR-11", writingText: "(N.B 32MM 1.25\") (OD34.9MM) SDR-11 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p120", size: "1.5\"", category: "CPVC SDR-11", writingText: "(N.B 40MM 1.5\") (OD41.3MM) SDR-11 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p121", size: "2.0\"", category: "CPVC SDR-11", writingText: "(N.B 50MM 2.0\") (OD54.0MM) SDR-11 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p122", size: "1/2\"", category: "CPVC SDR-13.5", writingText: "(N.B 15MM 1/2\") (OD15.9MM) SDR-13.5 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p123", size: "3/4\"", category: "CPVC SDR-13.5", writingText: "(N.B 20MM 3/4\") (OD22.2MM) SDR-13.5 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p124", size: "1.0\"", category: "CPVC SDR-13.5", writingText: "(N.B 25MM 1.0\") (OD28.5MM) SDR-13.5 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p125", size: "1.25\"", category: "CPVC SDR-13.5", writingText: "(N.B 32MM 1.25\") (OD34.9MM) SDR-13.5 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },

  // Page 14: CPVC, Filter Pipe & HDPE Coil
  { id: "p126", size: "1.5\"", category: "CPVC SDR-13.5", writingText: "(N.B 40MM 1.5\") (OD41.3MM) SDR-13.5 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p127", size: "2.0\"", category: "CPVC SDR-13.5", writingText: "(N.B 50MM 2.0\") (OD54.0MM) SDR-13.5 Class-I CPVC 4120 ASTM D2846 MFG. SILMOON PIPE & FITTINGS LTD. (BANGLADESH) (CYY:MM:DD) HH:MM:SS" },
  { id: "p128", size: "1.5\"", category: "Filter Pipe", writingText: "uPVC PIPE *ISO 9001-2015 Certified* 1.5\" uPVC PIPE No.4 Filter (TYYY:MM:DDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p129", size: "1.5\"", category: "Filter Pipe", writingText: "uPVC PIPE *ISO 9001-2015 Certified* 1.5\" uPVC PIPE No.6 Filter (TYYY:MM:DDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p130", size: "1.5\"", category: "Filter Pipe", writingText: "uPVC PIPE *ISO 9001-2015 Certified* 1.5\" uPVC PIPE No.8 Filter (TYYY:MM:DDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p131", size: "1.5\"", category: "Filter Pipe", writingText: "uPVC PIPE *ISO 9001-2015 Certified* 1.5\" uPVC PIPE No.10 Filter (TYYY:MM:DDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p132", size: "1.5\"", category: "Filter Pipe", writingText: "uPVC PIPE *ISO 9001-2015 Certified* 1.5\" uPVC PIPE Sulov Filter (TYYY:MM:DDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p133", size: "2\"", category: "Filter Pipe", writingText: "uPVC PIPE *ISO 9001-2015 Certified* 2\" uPVC PIPE Rib Filter (TYYY:MM:DDL01A) HH:MM:SS BSTI LOGO" },
  { id: "p134", size: "1/2\"", category: "HDPE Coil", writingText: "1/2\" HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
  { id: "p135", size: "3/4\"", category: "HDPE Coil", writingText: "3/4\" HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
  { id: "p136", size: "1\"", category: "HDPE Coil", writingText: "1\" HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
  { id: "p137", size: "1.25\"", category: "HDPE Coil", writingText: "1.25\" HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
  { id: "p138", size: "1.5\"", category: "HDPE Coil", writingText: "1.5\" HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },

  // Page 15: HDPE Coil & WASA HDPE
  { id: "p139", size: "2\"", category: "HDPE Coil", writingText: "2\" HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
  { id: "p140", size: "3/4\"", category: "WASA HDPE", writingText: "3/4\" WASA HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
  { id: "p141", size: "1\"", category: "WASA HDPE", writingText: "1\" WASA HDPE COIL PIPE (TYYY:MM:DDL07A) HH:MM:SS BSTI LOGO 005 FT" },
];
