'use client';
import React, { useState, useEffect } from 'react';

// 플랜 데이터 정의 (CSV 파일에서 추출한 정보 기반)
const plans = [
  {
    id: "trial",
    name: "Trial",
    priceMonthly: "무료 (2주)",
    priceAnnual: null,
    description: "보안 취약점 진단을 처음 시작하는 기업을 위한 무료 체험 플랜",
    badge: "체험용",
    features: {
      // 계정
      members: "1명",
      scanFrequency: "1일 간격",
      
      // 자산 식별 및 관리
      seeds: "1개",
      ipPorts: "기본",
      domains: "기본",
      websites: "기본",
      screenshot: "❌",
      webTechStack: "기본",
      dataDownload: "❌",
      assetView: "기본",
      
      // 취약점 탐지
      threatExposure: "기본",
      cveScanner: "기본",
      sensitiveInfo: "기본",
      certificateSecurity: "기본",
      
      // 취약점 관리
      vulnerabilityDataDownload: "❌",
      vulnerabilityList: "기본",
      vulnerabilityFilter: "기본",
      historicalInfo: "❌",
      statistics: "기본",
      issueComments: "기본",
      
      // 컴플라이언스
      cloudAccounts: "1개",
      frameworks: "1개",
      isms: "❌",
      iso27001: "❌",
      pciDss: "❌",
      soc2: "❌",
      cisBenchmark: "기본",
      
      // 취약점 점검
      autoPen: "❌",
      penTestSites: "0개",
      credits: "0개",
      xssScan: "❌",
      idorScan: "❌",
      redirectScan: "❌",
      sensitivePagescan: "❌",
      
      // 스코어링 및 리포팅
      scoringFrequency: "❌",
      securityScoring: "❌",
      industryCompare: "❌",
      scoreReport: "❌",
      issueSummary: "❌",
      issueEmail: "❌",
      
      // 워크플로우 기능
      slackIntegration: "❌",
      jiraIntegration: "❌",
      ssoLogin: "❌",
      
      // 고객 지원
      supportChannel: "서비스 내 문의",
      inquiryTypes: "일반 문의",
      responseTime: "5 영업일 내"
    }
  },
  {
    id: "basic",
    name: "Basic",
    priceMonthly: 99,
    priceDisplayMonthly: "13만원 / 월",
    priceAnnual: 1188,
    priceDisplayAnnual: "156만원 / 년",
    description: "중요 취약점 식별 및 관리를 위한 핵심 기능 제공",
    badge: "인기",
    features: {
      // 계정
      members: "3명",
      scanFrequency: "1주 간격",
      
      // 자산 식별 및 관리
      seeds: "1개 (unlock으로 확장 가능)",
      ipPorts: "기본",
      domains: "기본",
      websites: "기본",
      screenshot: "🔒 (unlock 필요)",
      webTechStack: "기본",
      dataDownload: "🔒 (unlock 필요)",
      assetView: "기본",
      
      // 취약점 탐지
      threatExposure: "기본",
      cveScanner: "기본",
      sensitiveInfo: "🔒 (unlock 필요)",
      certificateSecurity: "🔒 (unlock 필요)",
      
      // 취약점 관리
      vulnerabilityDataDownload: "🔒 (unlock 필요)",
      vulnerabilityList: "기본",
      vulnerabilityFilter: "기본",
      historicalInfo: "🔒 (unlock 필요)",
      statistics: "기본",
      issueComments: "기본",
      
      // 컴플라이언스
      cloudAccounts: "1개 (unlock으로 3개 확장 가능)",
      frameworks: "1개 (unlock으로 3개 확장 가능)",
      isms: "기본",
      iso27001: "기본",
      pciDss: "기본",
      soc2: "기본",
      cisBenchmark: "기본",
      
      // 취약점 점검
      autoPen: "🔒 (unlock 필요)",
      penTestSites: "🔒 (unlock 필요)",
      credits: "🔒 (unlock 필요)",
      xssScan: "🔒 (unlock 필요)",
      idorScan: "🔒 (unlock 필요)",
      redirectScan: "🔒 (unlock 필요)",
      sensitivePagescan: "🔒 (unlock 필요)",
      
      // 스코어링 및 리포팅
      scoringFrequency: "월 1회 (unlock으로 2회 확장 가능)",
      securityScoring: "기본",
      industryCompare: "기본",
      scoreReport: "기본",
      issueSummary: "🔒 (unlock 필요)",
      issueEmail: "🔒 (unlock 필요)",
      
      // 워크플로우 기능
      slackIntegration: "🔒 (unlock 필요)",
      jiraIntegration: "🔒 (unlock 필요)",
      ssoLogin: "🔒 (unlock 필요)",
      
      // 고객 지원
      supportChannel: "서비스 내 문의",
      inquiryTypes: "일반 문의",
      responseTime: "3 영업일 내"
    }
  },
  {
    id: "standard",
    name: "Standard",
    priceMonthly: 174,
    priceDisplayMonthly: "165만원 / 월",
    priceAnnual: 1650,
    priceDisplayAnnual: "1,650만원 / 년",
    description: "확장된 취약점 관리 및 특화된 보안 보고서 제공",
    badge: "권장",
    features: {
      // 계정
      members: "5명",
      scanFrequency: "3일 간격",
      
      // 자산 식별 및 관리
      seeds: "3개",
      ipPorts: "기본",
      domains: "기본",
      websites: "기본",
      screenshot: "기본",
      webTechStack: "기본",
      dataDownload: "기본",
      assetView: "기본",
      
      // 취약점 탐지
      threatExposure: "기본",
      cveScanner: "기본",
      sensitiveInfo: "기본",
      certificateSecurity: "기본",
      
      // 취약점 관리
      vulnerabilityDataDownload: "기본",
      vulnerabilityList: "기본",
      vulnerabilityFilter: "기본",
      historicalInfo: "기본",
      statistics: "기본",
      issueComments: "기본",
      
      // 컴플라이언스
      cloudAccounts: "3개 (unlock으로 5개 확장 가능)",
      frameworks: "3개 (unlock으로 5개 확장 가능)",
      isms: "기본",
      iso27001: "기본",
      pciDss: "기본",
      soc2: "기본",
      cisBenchmark: "기본",
      
      // 취약점 점검
      autoPen: "🔒 (unlock 필요)",
      penTestSites: "최대 3개",
      credits: "15개",
      xssScan: "🔒 (unlock 필요)",
      idorScan: "🔒 (unlock 필요)",
      redirectScan: "🔒 (unlock 필요)",
      sensitivePagescan: "🔒 (unlock 필요)",
      
      // 스코어링 및 리포팅
      scoringFrequency: "월 1회 (unlock으로 2회 확장 가능)",
      securityScoring: "기본",
      industryCompare: "기본",
      scoreReport: "기본",
      issueSummary: "기본",
      issueEmail: "기본",
      
      // 워크플로우 기능
      slackIntegration: "🔒 (unlock 필요)",
      jiraIntegration: "🔒 (unlock 필요)",
      ssoLogin: "🔒 (unlock 필요)",
      
      // 고객 지원
      supportChannel: "서비스 내 문의, 메일",
      inquiryTypes: "일반 문의, 기술적 활용 방법 문의, 기능 업그레이드 문의",
      responseTime: "2 영업일 내"
    }
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 239,
    priceDisplayMonthly: "255만원 / 월",
    priceAnnual: 2565,
    priceDisplayAnnual: "2,565만원 / 년",
    description: "고급 취약점 점검 및 워크플로우 통합으로 효율성 극대화",
    badge: null,
    features: {
      // 계정
      members: "10명",
      scanFrequency: "1일 간격",
      
      // 자산 식별 및 관리
      seeds: "10개",
      ipPorts: "기본",
      domains: "기본",
      websites: "기본",
      screenshot: "기본",
      webTechStack: "기본",
      dataDownload: "기본",
      assetView: "기본",
      
      // 취약점 탐지
      threatExposure: "기본",
      cveScanner: "기본",
      sensitiveInfo: "기본",
      certificateSecurity: "기본",
      
      // 취약점 관리
      vulnerabilityDataDownload: "기본",
      vulnerabilityList: "기본",
      vulnerabilityFilter: "기본",
      historicalInfo: "기본",
      statistics: "기본",
      issueComments: "기본",
      
      // 컴플라이언스
      cloudAccounts: "10개",
      frameworks: "5개",
      isms: "기본",
      iso27001: "기본",
      pciDss: "기본",
      soc2: "기본",
      cisBenchmark: "기본",
      
      // 취약점 점검
      autoPen: "기본",
      penTestSites: "최대 5개",
      credits: "15개",
      xssScan: "기본",
      idorScan: "기본",
      redirectScan: "기본",
      sensitivePagescan: "기본",
      
      // 스코어링 및 리포팅
      scoringFrequency: "월 2회",
      securityScoring: "기본",
      industryCompare: "기본",
      scoreReport: "기본",
      issueSummary: "기본",
      issueEmail: "기본",
      
      // 워크플로우 기능
      slackIntegration: "기본",
      jiraIntegration: "기본",
      ssoLogin: "기본",
      
      // 고객 지원
      supportChannel: "서비스 내 문의, 메일, Slack, 화상통화",
      inquiryTypes: "모든 문의",
      responseTime: "1 영업일 내"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: 375,
    priceDisplayMonthly: "375만원 (최소)",
    priceAnnual: null,
    description: "기업 맞춤형 보안 솔루션 및 무제한 확장성 제공",
    badge: "맞춤형",
    features: {
      // 계정
      members: "무제한",
      scanFrequency: "맞춤 설정",
      
      // 자산 식별 및 관리
      seeds: "무제한",
      ipPorts: "기본",
      domains: "기본",
      websites: "기본",
      screenshot: "기본",
      webTechStack: "기본",
      dataDownload: "기본",
      assetView: "기본",
      
      // 취약점 탐지
      threatExposure: "기본",
      cveScanner: "기본",
      sensitiveInfo: "기본",
      certificateSecurity: "기본",
      
      // 취약점 관리
      vulnerabilityDataDownload: "기본",
      vulnerabilityList: "기본",
      vulnerabilityFilter: "기본",
      historicalInfo: "기본",
      statistics: "기본",
      issueComments: "기본",
      
      // 컴플라이언스
      cloudAccounts: "무제한",
      frameworks: "무제한",
      isms: "기본",
      iso27001: "기본",
      pciDss: "기본",
      soc2: "기본",
      cisBenchmark: "기본",
      
      // 취약점 점검
      autoPen: "기본",
      penTestSites: "무제한 (기본 5개 제공)",
      credits: "사이트별 15개",
      xssScan: "기본",
      idorScan: "기본",
      redirectScan: "기본",
      sensitivePagescan: "기본",
      
      // 스코어링 및 리포팅
      scoringFrequency: "무제한",
      securityScoring: "기본",
      industryCompare: "기본",
      scoreReport: "기본",
      issueSummary: "기본",
      issueEmail: "기본",
      
      // 워크플로우 기능
      slackIntegration: "기본",
      jiraIntegration: "기본",
      ssoLogin: "기본",
      
      // 고객 지원
      supportChannel: "커스텀 가능",
      inquiryTypes: "커스텀 가능",
      responseTime: "1 영업일 내"
    }
  }
];

// 카테고리 정의
const featureCategories = [
  {
    id: "account",
    name: "계정 설정",
    features: [
      { id: "members", name: "사용 가능한 계정 수" },
      { id: "scanFrequency", name: "스캔 빈도" }
    ]
  },
  {
    id: "asset",
    name: "자산 식별 및 관리",
    features: [
      { id: "seeds", name: "등록 가능한 Seed" },
      { id: "ipPorts", name: "IP & Ports" },
      { id: "domains", name: "Domains & Subdomains" },
      { id: "websites", name: "Websites" },
      { id: "screenshot", name: "Screenshot" },
      { id: "webTechStack", name: "Web Tech Stack" },
      { id: "dataDownload", name: "데이터 다운로드" },
      { id: "assetView", name: "식별 자산 목록 조회" }
    ]
  },
  {
    id: "vulnerability",
    name: "취약점 탐지",
    features: [
      { id: "threatExposure", name: "환경 위협 노출 진단" },
      { id: "cveScanner", name: "CVE 스캐너" },
      { id: "sensitiveInfo", name: "민감정보 노출 진단" },
      { id: "certificateSecurity", name: "인증서 보안 진단" }
    ]
  },
  {
    id: "management",
    name: "취약점 관리",
    features: [
      { id: "vulnerabilityDataDownload", name: "데이터 다운로드" },
      { id: "vulnerabilityList", name: "취약점 목록 조회" },
      { id: "vulnerabilityFilter", name: "필터" },
      { id: "historicalInfo", name: "Historical Information 조회" },
      { id: "statistics", name: "Statistics" },
      { id: "issueComments", name: "이슈 댓글 기능" }
    ]
  },
  {
    id: "compliance",
    name: "컴플라이언스",
    features: [
      { id: "cloudAccounts", name: "연동 가능한 클라우드 Account" },
      { id: "frameworks", name: "선택 가능한 프레임워크 개수" },
      { id: "isms", name: "ISMS" },
      { id: "iso27001", name: "ISO 27001" },
      { id: "pciDss", name: "PCI DSS" },
      { id: "soc2", name: "SOC2" },
      { id: "cisBenchmark", name: "CIS Benchmark" }
    ]
  },
  {
    id: "pentest",
    name: "취약점 점검",
    features: [
      { id: "autoPen", name: "자동 취약점 점검 기본 패키지" },
      { id: "penTestSites", name: "점검 사이트 개수" },
      { id: "credits", name: "제공 Credit" },
      { id: "xssScan", name: "XSS 점검" },
      { id: "idorScan", name: "IDOR 점검" },
      { id: "redirectScan", name: "Open Redirect 점검" },
      { id: "sensitivePagescan", name: "민감 페이지 노출 점검" }
    ]
  },
  {
    id: "scoring",
    name: "Scoring & Reporting",
    features: [
      { id: "scoringFrequency", name: "Scoring Report 빈도" },
      { id: "securityScoring", name: "보안 수준 Scoring" },
      { id: "industryCompare", name: "동종 업계 대비 보안 태세 Score" },
      { id: "scoreReport", name: "Score Report" },
      { id: "issueSummary", name: "Issue Summary Report" },
      { id: "issueEmail", name: "Issue Summary Report Email" }
    ]
  },
  {
    id: "workflow",
    name: "워크플로우 기능",
    features: [
      { id: "slackIntegration", name: "Slack Integration" },
      { id: "jiraIntegration", name: "Jira Integration" },
      { id: "ssoLogin", name: "SSO Login (Google)" }
    ]
  },
  {
    id: "support",
    name: "고객 지원",
    features: [
      { id: "supportChannel", name: "문의창구" },
      { id: "inquiryTypes", name: "문의 케이스" },
      { id: "responseTime", name: "응답시간 (영업일 기준)" }
    ]
  }
];

// 사용자 요구사항 입력 폼 컴포넌트
const FeatureSelector = ({ onSubmit }) => {
  const initialFormData = {
    members: "",
    scanFrequency: "",
    seeds: "",
    screenshot: false,
    dataDownload: false,
    sensitiveInfo: false,
    certificateSecurity: false,
    historicalInfo: false,
    cloudAccounts: "",
    frameworks: "",
    autoPen: false,
    penTestSites: "",
    scoringFrequency: "",
    issueSummary: false,
    slackIntegration: false,
    jiraIntegration: false,
    ssoLogin: false,
    responseTime: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [activeTab, setActiveTab] = useState(0);
  const tabCount = 3;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 사용자 요구사항을 기준으로 데이터 변환
    const userSpecs = {
      members: parseInt(formData.members) || 0,
      scanFrequency: formData.scanFrequency,
      seeds: parseInt(formData.seeds) || 0,
      screenshot: formData.screenshot,
      dataDownload: formData.dataDownload,
      sensitiveInfo: formData.sensitiveInfo,
      certificateSecurity: formData.certificateSecurity,
      historicalInfo: formData.historicalInfo,
      cloudAccounts: parseInt(formData.cloudAccounts) || 0,
      frameworks: parseInt(formData.frameworks) || 0,
      autoPen: formData.autoPen,
      penTestSites: parseInt(formData.penTestSites) || 0,
      scoringFrequency: formData.scoringFrequency,
      issueSummary: formData.issueSummary,
      slackIntegration: formData.slackIntegration,
      jiraIntegration: formData.jiraIntegration,
      ssoLogin: formData.ssoLogin,
      responseTime: formData.responseTime
    };
    
    onSubmit(userSpecs);
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const nextTab = () => {
    if (activeTab < tabCount - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const prevTab = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 탭 네비게이션 */}
      <div className="flex border-b">
        <button 
          type="button" 
          onClick={() => handleTabChange(0)} 
          className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          기본 설정
        </button>
        <button 
          type="button" 
          onClick={() => handleTabChange(1)} 
          className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          보안 기능
        </button>
        <button 
          type="button" 
          onClick={() => handleTabChange(2)} 
          className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          보고서 및 지원
        </button>
      </div>

      {/* 탭 컨텐츠 */}
      <div className="p-6">
        {/* 기본 설정 탭 */}
        {activeTab === 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">계정 및 자산 관리 설정</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  최소 필요 계정 수
                </label>
                <select 
                  name="members" 
                  value={formData.members} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="1">1명</option>
                  <option value="3">3명</option>
                  <option value="5">5명</option>
                  <option value="10">10명</option>
                  <option value="99">10명 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  스캔 빈도
                </label>
                <select 
                  name="scanFrequency" 
                  value={formData.scanFrequency} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="week">주 1회</option>
                  <option value="3days">3일에 1회</option>
                  <option value="day">매일</option>
                  <option value="custom">맞춤 설정</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  등록할 Seed 수
                </label>
                <select 
                  name="seeds" 
                  value={formData.seeds} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="1">1개</option>
                  <option value="3">3개</option>
                  <option value="5">5개</option>
                  <option value="10">10개</option>
                  <option value="99">무제한</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  클라우드 계정 연동 수
                </label>
                <select 
                  name="cloudAccounts" 
                  value={formData.cloudAccounts} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="1">1개</option>
                  <option value="3">3개</option>
                  <option value="5">5개</option>
                  <option value="10">10개</option>
                  <option value="99">무제한</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {/* 보안 기능 탭 */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">취약점 탐지 및 관리 설정</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  프레임워크 선택 수
                </label>
                <select 
                  name="frameworks" 
                  value={formData.frameworks} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="1">1개</option>
                  <option value="3">3개</option>
                  <option value="5">5개</option>
                  <option value="99">무제한</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  자동 점검 사이트 수
                </label>
                <select 
                  name="penTestSites" 
                  value={formData.penTestSites} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="0">필요 없음</option>
                  <option value="1">1개</option>
                  <option value="3">3개</option>
                  <option value="5">5개</option>
                  <option value="99">5개 이상</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  스코어링 리포트 빈도
                </label>
                <select 
                  name="scoringFrequency" 
                  value={formData.scoringFrequency} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="none">필요 없음</option>
                  <option value="month1">월 1회</option>
                  <option value="month2">월 2회</option>
                  <option value="unlimited">무제한</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="screenshot" 
                  name="screenshot" 
                  checked={formData.screenshot} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="screenshot" className="ml-2 block text-sm text-gray-700">
                  스크린샷 기능 필요
                </label>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="dataDownload" 
                  name="dataDownload" 
                  checked={formData.dataDownload} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="dataDownload" className="ml-2 block text-sm text-gray-700">
                  자산 데이터 다운로드 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="sensitiveInfo" 
                  name="sensitiveInfo" 
                  checked={formData.sensitiveInfo} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="sensitiveInfo" className="ml-2 block text-sm text-gray-700">
                  민감정보 노출 진단 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="certificateSecurity" 
                  name="certificateSecurity" 
                  checked={formData.certificateSecurity} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="certificateSecurity" className="ml-2 block text-sm text-gray-700">
                  인증서 보안 진단 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="historicalInfo" 
                  name="historicalInfo" 
                  checked={formData.historicalInfo} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="historicalInfo" className="ml-2 block text-sm text-gray-700">
                  Historical Information 조회 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="autoPen" 
                  name="autoPen" 
                  checked={formData.autoPen} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="autoPen" className="ml-2 block text-sm text-gray-700">
                  자동 취약점 점검 필요
                </label>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="xssScan" 
                  name="xssScan" 
                  checked={formData.xssScan} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="xssScan" className="ml-2 block text-sm text-gray-700">
                  XSS 취약점 점검 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="idorScan" 
                  name="idorScan" 
                  checked={formData.idorScan} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="idorScan" className="ml-2 block text-sm text-gray-700">
                  IDOR 취약점 점검 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="redirectScan" 
                  name="redirectScan" 
                  checked={formData.redirectScan} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="redirectScan" className="ml-2 block text-sm text-gray-700">
                  Open Redirect 취약점 점검 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="sensitivePagescan" 
                  name="sensitivePagescan" 
                  checked={formData.sensitivePagescan} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="sensitivePagescan" className="ml-2 block text-sm text-gray-700">
                  민감 페이지 노출 점검 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="issueSummary" 
                  name="issueSummary" 
                  checked={formData.issueSummary} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="issueSummary" className="ml-2 block text-sm text-gray-700">
                  Issue Summary Report 필요
                </label>
              </div>
            </div>
          </div>
        )}
        
        {/* 보고서 및 지원 탭 */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">워크플로우 및 고객 지원 설정</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  응답 시간
                </label>
                <select 
                  name="responseTime" 
                  value={formData.responseTime} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택하세요</option>
                  <option value="5day">5 영업일 내</option>
                  <option value="3day">3 영업일 내</option>
                  <option value="2day">2 영업일 내</option>
                  <option value="1day">1 영업일 내</option>
                  <option value="custom">맞춤형 지원</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="slackIntegration" 
                  name="slackIntegration" 
                  checked={formData.slackIntegration} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="slackIntegration" className="ml-2 block text-sm text-gray-700">
                  Slack 연동 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="jiraIntegration" 
                  name="jiraIntegration" 
                  checked={formData.jiraIntegration} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="jiraIntegration" className="ml-2 block text-sm text-gray-700">
                  Jira 연동 필요
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="ssoLogin" 
                  name="ssoLogin" 
                  checked={formData.ssoLogin} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="ssoLogin" className="ml-2 block text-sm text-gray-700">
                  SSO 로그인 필요 (Google)
                </label>
              </div>
            </div>
          </div>
        )}
        
        {/* 탭 네비게이션 버튼 */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevTab}
            disabled={activeTab === 0}
            className={`px-4 py-2 rounded-md ${
              activeTab === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            이전
          </button>
          
          {activeTab < tabCount - 1 ? (
            <button
              type="button"
              onClick={nextTab}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              다음
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              플랜 추천 받기
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

// 플랜 추천 컴포넌트
const PlanRecommender = ({ userSpecs }) => {
  const [recommendedPlan, setRecommendedPlan] = useState(null);
  const [planScores, setPlanScores] = useState([]);
  const [billingMode, setBillingMode] = useState('monthly');
  
  useEffect(() => {
    if (!userSpecs) return;
    
    // 사용자 요구사항에 맞는 플랜 점수 계산
    // 사용자 요구사항에 맞는 플랜 점수 계산 (개선된 버전)
    const scores = plans.map(plan => {
      let functionalScore = 0;  // 기능 충족도 점수
      let requiredScore = 0;    // 사용자가 요청한 기능의 총 가중치
      let overProvisionScore = 0; // 과잉 제공 기능 점수 (차감용)
      
      // 계정 수
      if (userSpecs.members > 0) {
        requiredScore += 5;
        const planMembersText = plan.features.members;
        let planMembers = 1;
        
        if (planMembersText.includes('무제한')) {
          planMembers = 999;
        } else if (planMembersText.includes('10명')) {
          planMembers = 10;
        } else if (planMembersText.includes('5명')) {
          planMembers = 5;
        } else if (planMembersText.includes('3명')) {
          planMembers = 3;
        } else if (planMembersText.includes('1명')) {
          planMembers = 1;
        }
        
        if (planMembers >= userSpecs.members) {
          functionalScore += 5;
          // 필요 이상의 계정 수 제공에 대한 과잉 점수 계산
          if (planMembers > userSpecs.members * 2) {
            overProvisionScore += 1;
          }
        }
      }
      
      // 스캔 빈도
      if (userSpecs.scanFrequency) {
        requiredScore += 4;
        const planFrequency = plan.features.scanFrequency;
        
        // 정확히 필요한 빈도만 충족하면 만점, 과도한 빈도는 과잉 점수
        if (
          (userSpecs.scanFrequency === 'week' && planFrequency.includes('1주')) ||
          (userSpecs.scanFrequency === '3days' && planFrequency.includes('3일')) ||
          (userSpecs.scanFrequency === 'day' && planFrequency.includes('1일')) ||
          (userSpecs.scanFrequency === 'custom' && planFrequency.includes('맞춤'))
        ) {
          functionalScore += 4; // 정확히 일치하는 빈도
        } else if (
          (userSpecs.scanFrequency === 'week' && (planFrequency.includes('3일') || planFrequency.includes('1일'))) ||
          (userSpecs.scanFrequency === '3days' && planFrequency.includes('1일'))
        ) {
          functionalScore += 3; // 필요 이상의 빈도 제공 (약간 과잉)
          overProvisionScore += 0.5;
        } else if (planFrequency.includes('맞춤') && userSpecs.scanFrequency !== 'custom') {
          functionalScore += 3; // 맞춤 설정은 모든 빈도 요구사항 충족 가능
          overProvisionScore += 1; // 하지만 필요 이상의 서비스
        }
      }
      
      // Seeds 수
      if (userSpecs.seeds > 0) {
        requiredScore += 5;
        const planSeedsText = plan.features.seeds;
        let planSeeds = 1;
        
        if (planSeedsText.includes('무제한')) {
          planSeeds = 999;
        } else if (planSeedsText.includes('10개')) {
          planSeeds = 10;
        } else if (planSeedsText.includes('5개')) {
          planSeeds = 5;
        } else if (planSeedsText.includes('3개')) {
          planSeeds = 3;
        } else if (planSeedsText.includes('1개')) {
          planSeeds = 1;
        }
        
        if (planSeeds >= userSpecs.seeds) {
          functionalScore += 5;
          // 필요한 양의 2배 이상 제공하면 과잉 점수
          if (planSeeds > userSpecs.seeds * 2 && userSpecs.seeds > 1) {
            overProvisionScore += 1;
          }
        }
      }
      
      // 부울 기능 (스크린샷, 다운로드 등)
      const booleanFeatures = [
        { key: 'screenshot', weight: 3 },
        { key: 'dataDownload', weight: 3 },
        { key: 'sensitiveInfo', weight: 4 },
        { key: 'certificateSecurity', weight: 4 },
        { key: 'historicalInfo', weight: 3 },
        { key: 'autoPen', weight: 5 },
        { key: 'issueSummary', weight: 3 },
        { key: 'slackIntegration', weight: 2 },
        { key: 'jiraIntegration', weight: 2 },
        { key: 'ssoLogin', weight: 2 }
      ];
      
      booleanFeatures.forEach(feature => {
        if (userSpecs[feature.key]) {
          requiredScore += feature.weight;
          const planFeature = plan.features[feature.key];
          
          if (planFeature === '기본' || planFeature.includes('기본')) {
            functionalScore += feature.weight;
          } else if (planFeature.includes('unlock')) {
            functionalScore += feature.weight * 0.5;  // unlock 필요한 경우 부분 점수
          }
        } else {
          // 사용자가 요청하지 않았지만 제공되는 기능은 과잉으로 간주
          const planFeature = plan.features[feature.key];
          if (planFeature === '기본' || planFeature.includes('기본')) {
            overProvisionScore += 0.5;
          }
        }
      });
      
      // 클라우드 계정
      if (userSpecs.cloudAccounts > 0) {
        requiredScore += 4;
        const planAccountsText = plan.features.cloudAccounts;
        let planAccounts = 0;
        
        if (planAccountsText.includes('무제한')) {
          planAccounts = 999;
        } else if (planAccountsText.includes('10개')) {
          planAccounts = 10;
        } else if (planAccountsText.match(/\b5개\b/)) {
          planAccounts = 5;
        } else if (planAccountsText.match(/\b3개\b/)) {
          planAccounts = 3;
        } else if (planAccountsText.match(/\b1개\b/)) {
          planAccounts = 1;
        }
        
        if (planAccounts >= userSpecs.cloudAccounts) {
          functionalScore += 4;
          // 필요 이상의 계정 제공에 대한 과잉 점수
          if (planAccounts > userSpecs.cloudAccounts * 2 && userSpecs.cloudAccounts > 1) {
            overProvisionScore += 1;
          }
        }
      }
      
      // 프레임워크
      if (userSpecs.frameworks > 0) {
        requiredScore += 3;
        const planFrameworksText = plan.features.frameworks;
        let planFrameworks = 0;
        
        if (planFrameworksText.includes('무제한')) {
          planFrameworks = 999;
        } else if (planFrameworksText.includes('5개')) {
          planFrameworks = 5;
        } else if (planFrameworksText.match(/\b3개\b/)) {
          planFrameworks = 3;
        } else if (planFrameworksText.match(/\b1개\b/)) {
          planFrameworks = 1;
        }
        
        if (planFrameworks >= userSpecs.frameworks) {
          functionalScore += 3;
          // 필요 이상의 프레임워크 제공에 대한 과잉 점수
          if (planFrameworks > userSpecs.frameworks * 2 && userSpecs.frameworks > 1) {
            overProvisionScore += 0.5;
          }
        }
      }
      
      // 점검 사이트
      if (userSpecs.penTestSites > 0) {
        requiredScore += 5;
        const planSitesText = plan.features.penTestSites;
        let planSites = 0;
        
        if (planSitesText.includes('무제한')) {
          planSites = 999;
        } else if (planSitesText.includes('5개')) {
          planSites = 5;
        } else if (planSitesText.includes('3개')) {
          planSites = 3;
        } else if (planSitesText.match(/\b1개\b/)) {
          planSites = 1;
        }
        
        if (planSites >= userSpecs.penTestSites) {
          functionalScore += 5;
          // 필요 이상의 사이트 제공에 대한 과잉 점수
          if (planSites > userSpecs.penTestSites * 2 && userSpecs.penTestSites > 1) {
            overProvisionScore += 1;
          }
        }
      }
      
      // 스코어링 빈도
      if (userSpecs.scoringFrequency) {
        requiredScore += 3;
        const planFreq = plan.features.scoringFrequency;
        
        if (
          (userSpecs.scoringFrequency === 'none' && planFreq !== '❌') ||
          (userSpecs.scoringFrequency === 'month1' && planFreq.includes('1회')) ||
          (userSpecs.scoringFrequency === 'month2' && planFreq.includes('2회')) ||
          (userSpecs.scoringFrequency === 'unlimited' && planFreq.includes('무제한'))
        ) {
          functionalScore += 3; // 정확히 일치
        } else if (
          (userSpecs.scoringFrequency === 'month1' && (planFreq.includes('2회') || planFreq.includes('무제한'))) ||
          (userSpecs.scoringFrequency === 'month2' && planFreq.includes('무제한'))
        ) {
          functionalScore += 2.5; // 필요 이상 제공
          overProvisionScore += 0.5;
        }
      }
      
      // 응답 시간
      if (userSpecs.responseTime) {
        requiredScore += 4;
        const planResponseText = plan.features.responseTime;
        
        if (
          (userSpecs.responseTime === '5day' && planResponseText.includes('5 영업일')) ||
          (userSpecs.responseTime === '3day' && planResponseText.includes('3 영업일')) ||
          (userSpecs.responseTime === '2day' && planResponseText.includes('2 영업일')) ||
          (userSpecs.responseTime === '1day' && planResponseText.includes('1 영업일')) ||
          (userSpecs.responseTime === 'custom' && planResponseText.includes('커스텀'))
        ) {
          functionalScore += 4; // 정확히 일치
        } else if (
          (userSpecs.responseTime === '5day' && (planResponseText.includes('3 영업일') || planResponseText.includes('2 영업일') || planResponseText.includes('1 영업일'))) ||
          (userSpecs.responseTime === '3day' && (planResponseText.includes('2 영업일') || planResponseText.includes('1 영업일'))) ||
          (userSpecs.responseTime === '2day' && planResponseText.includes('1 영업일'))
        ) {
          functionalScore += 3.5; // 필요보다 빠른 응답 시간
          overProvisionScore += 0.5;
        }
      }
      
      // 가격 페널티 - 비싼 플랜에 약간의 불이익
      let pricePenalty = 0;
      if (plan.priceMonthly) {
        // 월 요금이 150 이상이면 약간의 페널티 부여
        pricePenalty = plan.priceMonthly > 200 ? 5 : (plan.priceMonthly > 150 ? 3 : 0);
      }
      
      // 가성비 보너스 - 필요한 기능을 충족하면서 가장 저렴한 플랜에 보너스
      let valueBonus = 0;
      if (requiredScore > 0 && functionalScore / requiredScore >= 0.85) {
        // 요구사항의 85% 이상 충족하면서 더 저렴한 플랜일수록 보너스
        valueBonus = plan.priceMonthly ? (100 / plan.priceMonthly) * 10 : 0;
        
        // Trial 플랜은 무료지만 제한적이므로 특별 처리
        if (plan.id === 'trial') {
          valueBonus = functionalScore / requiredScore >= 0.9 ? 15 : 5;
        }
      }
      
      // 최종 점수 계산 (100점 만점)
      let finalScore = 0;
      if (requiredScore > 0) {
        // 기본 점수 = (기능 충족도 / 요구사항 총점) * 100
        const baseScore = (functionalScore / requiredScore) * 100;
        
        // 과잉 제공 페널티 (최대 10점)
        const overProvisionPenalty = Math.min(overProvisionScore * 2, 10);
        
        // 최종 점수 = 기본 점수 + 가성비 보너스 - 가격 페널티 - 과잉 제공 페널티
        finalScore = Math.round(baseScore + valueBonus - pricePenalty - overProvisionPenalty);
        
        // 점수 범위 제한 (0-100)
        finalScore = Math.max(0, Math.min(finalScore, 100));
      }
      
      return {
        id: plan.id,
        name: plan.name,
        functionalScore,
        requiredScore,
        overProvision: overProvisionScore,
        priceScore: pricePenalty,
        valueBonus,
        score: finalScore,
        matches: requiredScore > 0
      };
    });
        
    // 매칭되는 플랜 중 점수가 가장 높은 플랜 추천
    const matchingPlans = scores.filter(plan => plan.matches);
    let bestPlan = null;
    
    if (matchingPlans.length > 0) {
      bestPlan = matchingPlans.reduce((prev, current) => 
        (prev.score > current.score) ? prev : current
      );
    }
    
    setRecommendedPlan(bestPlan ? plans.find(p => p.id === bestPlan.id) : null);
    setPlanScores(scores);
    
  }, [userSpecs]);
  
  // 특정 플랜에 대한 정보 가져오기
  const getPlanById = (id) => {
    return plans.find(plan => plan.id === id);
  };
  
  // 특정 카테고리에 대한 특징 렌더링
  const renderFeatures = (categoryId, planId) => {
    const category = featureCategories.find(cat => cat.id === categoryId);
    const plan = getPlanById(planId);
    
    if (!category || !plan) return null;
    
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
        <ul className="space-y-2">
          {category.features.map(feature => (
            <li key={feature.id} className="flex justify-between">
              <span className="text-sm text-gray-600">{feature.name}</span>
              <span className="text-sm font-medium">{plan.features[feature.id]}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  if (!recommendedPlan) {
    return <div className="text-center p-6">요구사항을 선택해주세요.</div>;
  }
  
  return (
    <div className="mt-8">
      {/* 추천 플랜 표시 */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">추천 플랜</h2>
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          {recommendedPlan.name} 플랜
        </div>
        <p className="text-gray-600 mt-2">
          요구사항에 가장 적합한 플랜입니다.
        </p>
      </div>
      
      {/* 플랜 점수 표시 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">플랜 적합도 점수</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {planScores.map(score => (
            <div 
              key={score.id} 
              className={`p-4 rounded-lg border ${score.id === recommendedPlan.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
            >
              <div className="text-lg font-semibold">{getPlanById(score.id).name}</div>
              <div className="text-3xl font-bold mt-2">{score.score}<span className="text-sm text-gray-500">/100</span></div>
              {score.id === recommendedPlan.id && (
                <div className="text-blue-600 text-sm mt-2 font-medium">추천 플랜</div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* 요금제 토글 */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setBillingMode('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              billingMode === 'monthly' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } border border-gray-300`}
          >
            월간 요금제
          </button>
          <button
            type="button"
            onClick={() => setBillingMode('annual')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              billingMode === 'annual' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } border border-gray-300`}
          >
            연간 요금제
          </button>
        </div>
      </div>
      
      {/* 추천 플랜 상세 정보 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{recommendedPlan.name}</h2>
              <p className="text-gray-600">{recommendedPlan.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {billingMode === 'monthly' 
                  ? recommendedPlan.priceDisplayMonthly
                  : recommendedPlan.priceDisplayAnnual || '요청 시 견적'}
              </div>
              {billingMode === 'annual' && recommendedPlan.priceAnnual && (
                <div className="text-sm text-green-600 font-medium">
                  월 결제 대비 {Math.round((1 - (recommendedPlan.priceAnnual / (recommendedPlan.priceMonthly * 12))) * 100)}% 할인
                </div>
              )}
            </div>
          </div>
          
          {/* 추천 이유 */}
          <div className="bg-blue-50 p-4 rounded-md mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">추천 이유</h3>
            <ul className="list-disc pl-5 space-y-1">
              {userSpecs.members > 0 && parseInt(recommendedPlan.features.members) >= userSpecs.members && (
                <li>필요한 {userSpecs.members}명의 계정을 제공합니다.</li>
              )}
              {userSpecs.seeds > 0 && (
                <li>요청하신 {userSpecs.seeds}개의 Seed 등록이 가능합니다.</li>
              )}
              {userSpecs.cloudAccounts > 0 && (
                <li>필요한 {userSpecs.cloudAccounts}개의 클라우드 계정 연동이 가능합니다.</li>
              )}
              {userSpecs.frameworks > 0 && (
                <li>{userSpecs.frameworks}개의 프레임워크 선택이 가능합니다.</li>
              )}
              {userSpecs.penTestSites > 0 && (
                <li>요청하신 {userSpecs.penTestSites}개의 자동 점검 사이트를 지원합니다.</li>
              )}
              {userSpecs.screenshot && recommendedPlan.features.screenshot.includes('기본') && (
                <li>스크린샷 기능을 제공합니다.</li>
              )}
              {userSpecs.dataDownload && recommendedPlan.features.dataDownload.includes('기본') && (
                <li>자산 데이터 다운로드 기능을 제공합니다.</li>
              )}
              {userSpecs.sensitiveInfo && recommendedPlan.features.sensitiveInfo.includes('기본') && (
                <li>민감정보 노출 진단 기능을 제공합니다.</li>
              )}
              {userSpecs.autoPen && recommendedPlan.features.autoPen.includes('기본') && (
                <li>자동 취약점 점검 기능을 제공합니다.</li>
              )}
              {userSpecs.slackIntegration && recommendedPlan.features.slackIntegration.includes('기본') && (
                <li>Slack 연동 기능을 제공합니다.</li>
              )}
              {userSpecs.jiraIntegration && recommendedPlan.features.jiraIntegration.includes('기본') && (
                <li>Jira 연동 기능을 제공합니다.</li>
              )}
              {userSpecs.ssoLogin && recommendedPlan.features.ssoLogin.includes('기본') && (
                <li>SSO 로그인 기능을 제공합니다.</li>
              )}
            </ul>
          </div>
          
          {/* 카테고리별 기능 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              {renderFeatures('account', recommendedPlan.id)}
              {renderFeatures('asset', recommendedPlan.id)}
              {renderFeatures('vulnerability', recommendedPlan.id)}
              {renderFeatures('management', recommendedPlan.id)}
            </div>
            <div>
              {renderFeatures('compliance', recommendedPlan.id)}
              {renderFeatures('pentest', recommendedPlan.id)}
              {renderFeatures('scoring', recommendedPlan.id)}
              {renderFeatures('workflow', recommendedPlan.id)}
              {renderFeatures('support', recommendedPlan.id)}
            </div>
          </div>
          
          {/* 플랜 선택 버튼 */}
          <div className="mt-8 text-center">
            <button 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors"
            >
              {recommendedPlan.name} 플랜 선택하기
            </button>
            <p className="text-sm text-gray-500 mt-2">
              2주 무료 체험 후 결제가 진행됩니다.
            </p>
          </div>
        </div>
      </div>
      
      {/* 다른 플랜 비교 섹션 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6">다른 플랜과 비교하기</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border-b">기능</th>
                {plans.map(plan => (
                  <th 
                    key={plan.id} 
                    className={`py-3 px-4 text-center border-b ${plan.id === recommendedPlan.id ? 'bg-blue-50' : ''}`}
                  >
                    {plan.name}
                    {plan.badge && (
                      <span className="block text-xs font-normal mt-1 text-blue-600">
                        {plan.badge}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* 가격 행 */}
              <tr>
                <td className="py-3 px-4 border-b font-medium">가격</td>
                {plans.map(plan => (
                  <td 
                    key={plan.id} 
                    className={`py-3 px-4 text-center border-b ${plan.id === recommendedPlan.id ? 'bg-blue-50' : ''}`}
                  >
                    {billingMode === 'monthly' 
                      ? plan.priceDisplayMonthly || '문의'
                      : plan.priceDisplayAnnual || '문의'}
                  </td>
                ))}
              </tr>
              
              {/* 주요 기능 행 */}
              {[
                { label: '계정 수', key: 'members' },
                { label: '스캔 빈도', key: 'scanFrequency' },
                { label: 'Seed 수', key: 'seeds' },
                { label: '스크린샷', key: 'screenshot' },
                { label: '취약점 점검', key: 'autoPen' },
                { label: '클라우드 계정', key: 'cloudAccounts' },
                { label: '응답 시간', key: 'responseTime' }
              ].map(item => (
                <tr key={item.key}>
                  <td className="py-3 px-4 border-b font-medium">{item.label}</td>
                  {plans.map(plan => (
                    <td 
                      key={plan.id} 
                      className={`py-3 px-4 text-center border-b ${plan.id === recommendedPlan.id ? 'bg-blue-50' : ''}`}
                    >
                      {plan.features[item.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 문의 섹션 */}
      <div className="bg-gray-50 p-6 rounded-lg text-center mb-8">
        <h3 className="text-lg font-semibold mb-2">맞춤 견적이 필요하신가요?</h3>
        <p className="mb-4 text-gray-600">
          기업 규모나 요구사항에 따라 맞춤형 플랜을 구성해 드립니다.
        </p>
        <button 
          className="px-5 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors"
        >
          맞춤 견적 요청하기
        </button>
      </div>
    </div>
  );
};

// 메인 앱 컴포넌트
const App = () => {
  const [userSpecs, setUserSpecs] = useState(null);
  
  const handleFormSubmit = (specs) => {
    setUserSpecs(specs);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">보안 취약점 진단 서비스 플랜</h1>
          <p className="text-xl text-gray-600">
            귀사의 요구사항에 맞는 최적의 플랜을 찾아보세요.
          </p>
        </div>
        
        {/* 사용자 요구사항 입력 폼 */}
        <FeatureSelector onSubmit={handleFormSubmit} />
        
        {/* 추천 플랜 표시 */}
        <PlanRecommender userSpecs={userSpecs} />
      </div>
    </div>
  );
};

export default App;