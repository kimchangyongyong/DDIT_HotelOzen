package kr.or.ddit.emp.pms.fxtrs.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.or.ddit.emp.pms.fxtrs.service.EmpPmsFxtrsRqstService;
import kr.or.ddit.global.common.paging.BootstrapFormBasePaginationRenderer;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.common.paging.PaginationRenderer;
import kr.or.ddit.global.common.paging.SearchCondition;
import kr.or.ddit.global.vo.FxtrsRqstVO;
import kr.or.ddit.global.vo.FxtrsVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("emp/pms/fxtrs")
public class EmpPmsFxrsRqstController {
	
	@Inject
	private EmpPmsFxtrsRqstService service;
	
	@RequestMapping(value="/rqstList.do", 
			method = {RequestMethod.GET, RequestMethod.POST}) //발주 신청 리스트 조회페이지
	public String fxtrsOrder(
		@RequestParam(value="page", required = false, defaultValue = "1") int currentPage
		, Model model	
		, @ModelAttribute("simpleCondition") SearchCondition simpleCondition	
	) {
		PaginationInfo paging = new PaginationInfo();
		paging.setCurrentPage(currentPage);
		paging.setSimpleCondition(simpleCondition);
		log.info("#################{}", paging);
		
		List<FxtrsRqstVO> fxtrsrqstList = service.retrieveFxtrsRqstList(paging);
		model.addAttribute("fxtrsrqstList",fxtrsrqstList);
		
		log.info("#################{}", fxtrsrqstList);
		
		PaginationRenderer renderer = new BootstrapFormBasePaginationRenderer("#searchForm");
		String pagingHTML = renderer.renderPagination(paging);
		model.addAttribute("pagingHTML",pagingHTML);
		
		return "emp/pms/fxtrs/rqstList";
	}
	
	@GetMapping("rqstListadd.do")
	public String fxtrsUseadd() {
		return "emp/pms/fxtrs/rqstListadd";
	}
	
}
