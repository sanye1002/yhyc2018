package cn.popo.news.core.entity.common;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="dynamic")
public class Dynamic {

    @Id
    private String id;

    private String userId;

    private String content;

    private String imgUrl;

    private String videoUrl;

    private Long time;

    private Integer praiseNum;
}
