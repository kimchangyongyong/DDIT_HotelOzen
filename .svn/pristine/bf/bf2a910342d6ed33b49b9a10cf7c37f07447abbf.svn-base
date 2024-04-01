package kr.or.ddit.global.vo;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode(of = "empNtNo")
public class EmpNoticeVO implements Serializable {
	
	
	private int rnum;
	private String empNtNo;
	private String empNo;
	private String empNtNm;
	private LocalDate empNtYmd;
	private int empNtCnt;
	@ToString.Exclude
	private String empNtCn;
	private String empNtClassification;
	
	private Integer empNtParent;
	private int level;
	
	private HrmEmpVO hrmEmp; //DB TB_EMP_NOTICE 테이블에는 없지만 마이바티스 이용할 때 받아올 것임.
	
	private List<AtchmnflEmpNoticeVO> atchList;
	
	@ToString.Exclude
	@JsonIgnore
	private transient MultipartFile[] empNtFiles;
	

}
