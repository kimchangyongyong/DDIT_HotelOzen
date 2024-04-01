package kr.or.ddit.emp.hrm.pay.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.or.ddit.emp.hrm.pay.service.HrmPayService;
import kr.or.ddit.emp.hrm.pay.service.HrmPayslipService;
import kr.or.ddit.global.common.paging.BootstrapFormBasePaginationRenderer;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.common.paging.PaginationRenderer;
import kr.or.ddit.global.common.paging.SearchCondition;
import kr.or.ddit.global.vo.SalaryGiveVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/emp/hrm/pay/payslip")
public class HrmPayController {
	
	@Inject
	private HrmPayService service;
	
	@Inject
	private HrmPayslipService payslipService;
	
	@GetMapping("insert")
	public String insert() {
		return "emp/hrm/pay/payForm";
	}
	
	@GetMapping("delete")
	public String delete() {
		return "emp/hrm/pay/payEdit";
	}
	
	@GetMapping("update")
	public String update() {
		return "emp/hrm/pay/payView";
	}
	
	@GetMapping
	public String list(
			 @RequestParam(name="page", required =false, defaultValue="1") int currentPage
			, Model model
			, @ModelAttribute("simpleCondition") SearchCondition simpleCondition) {
		log.info("여기로 들어온다면 급여 리스트 조회를 원하는 것임.");

////		List<SalaryGiveVO> salaryGiveList = service.retrieveSalaryGiveList(paging);
////		model.addAttribute("salaryGiveList", salaryGiveList);
		
		PaginationInfo paging = new PaginationInfo(5,5);
		paging.setCurrentPage(currentPage);
		paging.setSimpleCondition(simpleCondition);
		
		PaginationRenderer renderer = new BootstrapFormBasePaginationRenderer("#searchForm");
		
		String pagingHTML = renderer.renderPagination(paging);
		
		log.info("simpleCondition :=====================================================>>>>>>>>>>. {}",simpleCondition );
		
		
//		//수정 필요
		String y1 = "2024/";
		String m1 = "02";
		String d1 = "/01";
		String y2 = "2024/";
		String m2 = "03";
		String d2 = "/01";
		
		Map<String, Object> data= new HashMap<String, Object>();
		data.put("y1", y1);
		data.put("m1", m1);
		data.put("d1", d1);
		data.put("y2", y2);
		data.put("m2", m2);
		data.put("d2", d2);
		
		List<Map<String, Object>> salaryGiveAutoList = service.createSalaryGiveAuto(paging,data);
//		List<Map<String, Integer>> salaryGiveAutoList = ;
		model.addAttribute("salaryGiveAutoList", salaryGiveAutoList);
		model.addAttribute("pagingHTML", pagingHTML);
		
		return "emp/hrm/pay/payList";
	}
	
	@PostMapping
	public String autoList(Model model) {
		log.info("여기로 들어온다면 급여 리스트 조회를 원하는 것임.");
		PaginationInfo paging = new PaginationInfo();
//		List<SalaryGiveVO> salaryGiveList = service.retrieveSalaryGiveList(paging);
//		model.addAttribute("salaryGiveList", salaryGiveList);
		//수정 필요
		String y1 = "2024/";
		String m1 = "02";
		String d1 = "/01";
		String y2 = "2024/";
		String m2 = "03";
		String d2 = "/01";
		
		Map<String, Object> data= new HashMap<String, Object>();
		data.put("y1", y1);
		data.put("m1", m1);
		data.put("d1", d1);
		data.put("y2", y2);
		data.put("m2", m2);
		data.put("d2", d2);
		
		List<Map<String, Object>> salaryGiveAutoList = service.createSalaryGiveAuto(paging,data);
		model.addAttribute("salaryGiveAutoList", salaryGiveAutoList);
		return "emp/hrm/pay/payList";
	}
	
	
	@GetMapping("newPayList")
	public String newList(Model model) {
		PaginationInfo paging = new PaginationInfo();
		List<SalaryGiveVO> salaryGiveList = service.retrieveSalaryGiveList(paging);
		model.addAttribute("salaryGiveList", salaryGiveList);
		return "emp/hrm/pay/payList";
	}
	
//	@PostMapping("detail")
//	public String getPayslip(@RequestBody Map<String, Object> param, Model model) {
////		log.info("{}",  param);
//		model.addAttribute("salary", param);
//		return "payslip";
//	}
	
	/**
	 *
	 * 새창을 열고 급여명세서 양식에 해당 직원의 급여 정보를 넣어 보여줌.
	 * @return
	 */
	@RequestMapping("detail")
	public String Paysㅓlip(
			@RequestParam("empHealthInsrnc") String empHealthInsrnc
			,@RequestParam("empPaymentAmnt") String empPaymentAmnt
			,@RequestParam("empNm") String empNm
			,@RequestParam("empEmplymInsrnc") String empEmplymInsrnc
			,@RequestParam("empThePay") String empThePay
			,@RequestParam("empDept") String empDept
			,@RequestParam("empNo") String empNo
			,@RequestParam("empNightWorkAllowance") String empNightWorkAllowance
			,@RequestParam("empJncmpYmd") String empJncmpYmd
			,@RequestParam("empNationalPension") String empNationalPension
			,@RequestParam("empLongTermCareInsrnc") String empLongTermCareInsrnc
			,@RequestParam("empDeductionAmnt") String empDeductionAmnt
			,@RequestParam("empMslay") String empMslay
			,@RequestParam("empJbgd") String empJbgd
			, Model model) {
		
		SimpleDateFormat date_format = new SimpleDateFormat("");
		
		
		model.addAttribute("empHealthInsrnc", empHealthInsrnc);
		model.addAttribute("empPaymentAmnt", empPaymentAmnt);
		model.addAttribute("empNm", empNm);
		model.addAttribute("empEmplymInsrnc", empEmplymInsrnc);
		model.addAttribute("empThePay", empThePay);
		model.addAttribute("empDept", empDept);
		model.addAttribute("empNo", empNo);
		model.addAttribute("empNightWorkAllowance", empNightWorkAllowance);
		model.addAttribute("empJncmpYmd", empJncmpYmd);
		model.addAttribute("empNationalPension", empNationalPension);
		model.addAttribute("empLongTermCareInsrnc", empLongTermCareInsrnc);
		model.addAttribute("empDeductionAmnt", empDeductionAmnt);
		model.addAttribute("empMslay", empMslay);
		model.addAttribute("empJbgd", empJbgd);
		
		model.addAttribute("yyyy", "2024");
		model.addAttribute("MM", "02");
		return "payslip";
	}
	
	/**
	 * 급여명세서 pdf를 만들고 저장함.
	 */
	@GetMapping("pdf")
	public void getPayslipPdf() {
		String y1 = "2024/";
		String m1 = "02";
		String d1 = "/01";
		String y2 = "2024/";
		String m2 = "03";
		String d2 = "/01";
		
		Map<String, Object> data= new HashMap<String, Object>();
		data.put("y1", y1);
		data.put("m1", m1);
		data.put("d1", d1);
		data.put("y2", y2);
		data.put("m2", m2);
		data.put("d2", d2);
		
		try {
			List<Map<String, Object>> salaryGiveAutoList = payslipService.createPayslipInfos(data);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		log.info("전체 급여 명세서 작성 성공");
	}
	
	
	

}
